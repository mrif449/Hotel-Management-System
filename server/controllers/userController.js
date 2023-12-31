const createError = require("http-errors");
const User = require("../models/userModel");
const { successResponse } = require("./responseController");
const { findWithId } = require("../services/findItem");
const { deleteImage } = require("../helper/deleteImage");
const { createJSONWebToken } = require("../helper/jsonwebtoken");
const { jwtActivationKey, clientURL } = require("../secret");
const jwt = require("jsonwebtoken");
const { MAX_FILE_SIZE } = require("../config");
const { Staff } = require("../models/model");


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

const getUserById = async (req, res, next) => {

    try {
        const id = req.params.id;
        const options = { password: 0 };
        const user = await findWithId(User, id, options);
        return successResponse(res, {
            statusCode: 200,
            message: "User has returned successfully",
            payload: { user },
        })
    } catch (error) {
        next(error);
    };
};

const getStaffById = async (req, res, next) => {

    try {
        const id = req.params.id;
        const options = { password: 0 };
        const staff = await findWithId(Staff, id, options);
        return successResponse(res, {
            statusCode: 200,
            message: "Staff has returned successfully",
            payload: { staff },
        })
    } catch (error) {
        next(error);
    };
};


const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const options = { password: 0 };
        const user = await findWithId(User, id, options);
        const userImagePath = user.image;

        deleteImage(userImagePath);

        await User.findByIdAndDelete({ _id: id, isAdmin: false });
        return successResponse(res, {
            statusCode: 200,
            message: "User has deleted successfully",
        })
    } catch (error) {
        next(error);
    };
};

const processRegister = async (req, res, next) => {
    try {
        const { name, email, password, phone, address } = req.body;
        const userExists = await User.exists({ email: email });
        if (userExists) {
            throw createError(409, "This email already exists. Please log in")
        };
       

    } catch (error) {
        next(error);
    };
};

const activateUserAccount = async (req, res, next) => {
    try {
        const token = req.body.token;
        if (!token) throw createError(404, "Token not found");
        try {
            const decoded = jwt.verify(token, jwtActivationKey);
            if (!token) throw createError(401, "User is not able to verify");
            const userExists = await User.exists({ email: decoded.email });
            if (userExists) {
                throw createError(
                    409, "User is already registered. Please sign in"
                );
            }
            await User.create(decoded);
            return successResponse(res, {
                statusCode: 201,
                message: `User is registered successfully`,
            })
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                throw createError(401, "Token has exprired")
            } else if (error.name === "JsonWebTokenError") {
                throw createError(401, "Invalid token")
            } else {
                throw error;
            }
        }
    } catch (error) {
        next(error);
    };
};

const updateUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const options = { password: 0 };
        await findWithId(User, userId, options);
        const updateOptions = { new: true, runValidators: true, context: "query" };
        let updates = {};
        
        for (let key in req.body){
            if(["name", "password", "phone", "address"].includes(key)){
                updates[key]= req.body[key];
            }
            else if(["email"].includes(key)){
                throw new Error("Email can not be updated/changed")
            }
        };
        const image = req.file;
        if (image) {
            if (image.size > MAX_FILE_SIZE) {
                throw new Error("Image file size should be less than 2 MB");
            };
            updates.image = image.buffer.toString("base64");
        };
        const updatedUser = await User.findByIdAndUpdate(userId, updates, updateOptions).select("-password");
        if (!updatedUser) {
            throw createError(404, "User with this ID does not exist");
        }
        return successResponse(res, {
            statusCode: 200,
            message: "User has updated successfully",
            payload: updatedUser,
        })
    } catch (error) {
        next(error);
    };
};

const handleBanUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await findWithId(User, userId);
        const updates = {isBanned: true};
        const updateOptions = { new: true, runValidators: true, context: "query" };

        const updatedUser = await User.findByIdAndUpdate(userId, updates, updateOptions).select("-password");
        if (!updatedUser) {
            throw createError(400, "User ban unsuccessful.");
        }
        return successResponse(res, {
            statusCode: 200,
            message: "User has banned successfully.",
        })
    } catch (error) {
        next(error);
    };
};

const handleUnbanUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await findWithId(User, userId);
        const updates = {isBanned: false};
        const updateOptions = { new: true, runValidators: true, context: "query" };

        const updatedUser = await User.findByIdAndUpdate(userId, updates, updateOptions).select("-password");
        if (!updatedUser) {
            throw createError(400, "User ban unsuccessful.");
        }
        return successResponse(res, {
            statusCode: 200,
            message: "User has unbanned successfully.",
        })
    } catch (error) {
        next(error);
    };
};

module.exports = { getUsers, getStaffById ,getUserById, deleteUserById, processRegister, activateUserAccount, updateUserById, handleBanUserById, handleUnbanUserById };