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

module.exports = {
    getLoginPage,
    login,
    logout
}