//External imports
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const createError = require("http-errors")

//Internal import
const {User} = require("../models/model")

//Get login page
const getLoginPage = (req, res, next) => {
    //TODO: Render login page {Should be done in the frontend}
}

// get users
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

//Login
const login = async (req, res, next) => {
    try {
        //find a user with the given email or mobile number
        const user = await User.findOne({
            $or: [{email: req.body.username}, {mobile: req.body.username}]
        })
        if(user && user._id){
            //check if the password is valid
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(isValidPassword){
                //prepare the user object to generate a jw token
                //only provide public info as it is accessible
                const userObject = {
                    userId: user._id,
                    username: user.username,
                    email: user.email,
                    mobile: user.phone_number,
                    userType: user.user_type,
                    isEnabled: user.is_enabled
                }
                //Generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRY
                })
                //Set the cookie
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly: true,
                    signed: true
                })
                //Set logged in user local identifier
                res.locals.loggedInUser = userObject
                //TODO: Redirect to profile page or home page
            }
            else{
                throw createError("LogInError: Invalid password")
            }
        }
        else{
            throw createError("LogInError: Unknown username")
        }
    } 
    catch (err) {
        //TODO: Redirect to login page where the error messages will be displayed
        //User doesn't need to rewrite the username. It will be automatically filled.
    }
}

//Logout
const logout = (req, res, next) => {
    res.clearCookie(process.env.COOKIE_NAME)
    res.send("logged out")
}

// register
const register = async (req, res, next) => {
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

// activate user account
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

module.exports = {
    getUsers,
    getLoginPage,
    login,
    logout, 
    register,
    activateUserAccount
}