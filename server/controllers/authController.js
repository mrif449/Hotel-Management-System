const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/userModel");
const { successResponse } = require("./responseController");
const { createJSONWebToken } = require("../helper/jsonwebtoken");
const bcrypt = require("bcryptjs");
const { jwtAccessKey, jwtRefreshKey } = require("../secret");
const { setAccessTokenCookie, setRefreshTokenCookie } = require("../helper/cookie");

const handleLogin = async (req, res, next) => {
    try {
        //email, passoword from req.body
        const { email, password } = req.body;
        // isExist
        const user = await User.findOne({ email });
        if (!user) {
            throw createError(404, "User does not exist with this email. Please register.");
        }
        // compare the password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw createError(401, "Invalid Email/Password.");
        }
        // isBanned
        if (user.isBanned) {
            throw createError(403, "This account is banned. Please contact support for details.");
        }
        // token, cookie
        const accessToken = createJSONWebToken({ user }, jwtAccessKey, "5m");
        setAccessTokenCookie(res, accessToken);

        // refresh token
        const refreshToken = createJSONWebToken({ user }, jwtRefreshKey, "7d");
        setRefreshTokenCookie(res, refreshToken);

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;
        // success response
        return successResponse(res, {
            statusCode: 200,
            message: "User login successful",
            payload: { userWithoutPassword },
        });

    } catch (error) {
        next(error);
    }
};

const handleLogout = async (req, res, next) => {
    try {
        // clearing log in cookie -> access_token
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        // success response
        return successResponse(res, {
            statusCode: 200,
            message: "Log out successful",
            payload: {},
        });

    } catch (error) {
        next(error);
    }
};

const handeRefreshToken = async (req, res, next) => {
    try {
        const oldRefreshToken = req.cookies.refreshToken;

        // verify old refresh token
        const decodedToken = jwt.verify(oldRefreshToken, jwtRefreshKey);
        if (!decodedToken) {
            throw createError(401, "Invalid refresh token. Please login again.");
        }
        // token, cookie
        const accessToken = createJSONWebToken(decodedToken.user, jwtAccessKey, "5m");
        setAccessTokenCookie(res, accessToken);

        // success response
        return successResponse(res, {
            statusCode: 200,
            message: "New access token is generated",
            payload: {},
        });

    } catch (error) {
        next(error);
    }
};

const handeProtectedRoute = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        // verify old refresh token
        const decodedToken = jwt.verify(accessToken, jwtAccessKey);
        if (!decodedToken) {
            throw createError(401, "Invalid access token. Please login again.");
        }

        // success response
        return successResponse(res, {
            statusCode: 200,
            message: "Protected resources accessed successfully.",
            payload: {},
        });

    } catch (error) {
        next(error);
    }
};


module.exports = { handleLogin, handleLogout, handeRefreshToken, handeProtectedRoute };