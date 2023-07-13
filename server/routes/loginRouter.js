//External Imports
const express = require('express')

//Internal Imports
const {getLoginPage, login, logout, register, activateUserAccount, getUsers} = require('../controllers/loginController')
const {logInValidators, validationResultHandler} = require('../middlewares/login/loginValidator')

//Initialize Router
const router = express.Router()

//Get login page
router.get('/', getLoginPage)

//Login
router.post('/', logInValidators, validationResultHandler, login)

//Logout
router.delete('/', logout)

// Register
router.get("/register",register);

// activate user account
router.post("/activate", activateUserAccount);

// get all users
router.get("/users", getUsers);

module.exports = router