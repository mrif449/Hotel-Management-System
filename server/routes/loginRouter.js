//External Imports
const express = require('express')

//Internal Imports
const {getLoginPage, login, logout} = require('../controllers/loginController')
const {logInValidators, validationResultHandler} = require('../middlewares/login/loginValidator')

//Initialize Router
const router = express.Router()

//Get login page
router.get('/', getLoginPage)

//Login
router.post('/', logInValidators, validationResultHandler, login)

//Logout
router.delete('/', logout)

module.exports = router