const express = require("express");
const { getStaffById } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/staff/:id",getStaffById)

module.exports = userRouter;