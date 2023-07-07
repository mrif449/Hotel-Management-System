const {check, validationResult} = require("express-validator")

//Email or Phone Number is used for logging in.
//Do not get confused with the username field in the User model.
const logInValidators = [
    check("username")
        .isLength({min: 1})
        .withMessage("Phone number or email address is required"),
    check("password")
        .isLength({min: 1})
        .withMessage("Password is required")
]

const validationResultHandler = (req, res, next) => {
    const errors = validationResult(req)
    const mappedErrors = errors.mapped()
    if(Object.keys(mappedErrors).length === 0){
        next()
    }
    else{
        //TODO: Redirect to login page where the error messages will be displayed
        //User doesn't need to rewrite the username. It will be automatically filled.
    }
}

module.exports = {
    logInValidators,
    validationResultHandler
}