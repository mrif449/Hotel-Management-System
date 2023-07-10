const createError = require("http-errors");
const {User} = require("../models/model");
const { successResponse } = require("./responseController"); //TODO: create this file
const { findWithId } = require("../services/findItem"); //TODO: create this file
const { deleteImage } = require("../helper/deleteImage"); //TODO: create this file
const { createJSONWebToken } = require("../helper/jsonwebtoken"); //TODO: create this file
const { jwtActivationKey, clientURL } = require("../secret"); //TODO: create this file
const EmailWithNodeMailer = require("../helper/email");
const jwt = require("jsonwebtoken");
const { MAX_FILE_SIZE } = require("../config"); //TODO: create this file


const getUsers = async (req, res, next) => {

    try {
        const search = req.query.search || "";
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;
        const options = { password: 0 };
        const searchRegExp = new RegExp(".*" + search + ".*", "i")
        const filter = {
            isAdmin: { $ne: true },
            $or: [
                { name: { $regex: searchRegExp } },
                { email: { $regex: searchRegExp } },
                { phone: { $regex: searchRegExp } },
            ]
        };
        const users = await User.find(filter, options).limit(limit).skip((page - 1) * limit);
        const count = await User.find(filter).countDocuments();
        if (!users) throw createError(404, "No user found!");
        return successResponse(res, {
            statusCode: 200,
            message: "Users returned successfully",
            payload: {
                users,
                pagination: {
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    previousPage: page - 1 > 0 ? page - 1 : null,
                    nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
                },
            },
        });
    } catch (error) {
        next(error)
    }
};

const processRegister = async (req, res, next) => {
    try {
        const { name, email, password, phone, address } = req.body;
        const image = req.file;
        if (!image) {
            throw createError(400, "Image file is required");
        }
        if (image.size > MAX_FILE_SIZE) {
            throw createError(400, "Image file size should be less than 2 MB");
        }
        const imageBufferString = image.buffer.toString("base64");
        const userExists = await User.exists({ email: email });
        if (userExists) {
            throw createError(409, "This email already exists. Please log in")
        };
        // create jwt
        const token = createJSONWebToken({ name, email, password, phone, address, image: imageBufferString }, jwtActivationKey, "10m");
        // prepare email
        const emailData = {
            email,
            subject: "Account Activation Email",
            html: `
                <h2>Hello ${name}!</h2>
                <p>Please click here to <a href="${clientURL}/api/users/activate/${token}" target="_blank">activate your account</a></p>
            `
        }

        // send email with nodemailer
        try {
            // await EmailWithNodeMailer(emailData);
        } catch (emailError) {
            next(createError(500, "Failed to send verification email"));
            return;
        }

        return successResponse(res, {
            statusCode: 200,
            message: `Please check ${email} for completing your registration process`,
            payload: { token, imageBufferString },
        });
    } catch (error) {
        next(error);
    };
};

module.export = {
    getUsers,
    processRegister
}