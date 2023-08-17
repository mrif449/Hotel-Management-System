const express = require("express");
//const { getUsers, getUserById, deleteUserById, processRegister } = require("../controllers/userController");
const userRouter = express.Router();

// GET: api/users
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById); //TODO: create getUserById() in userController.js
userRouter.delete("/:id", deleteUserById); //TODO: create deleteUserById() in userController.js
userRouter.post("/process-register", processRegister);

module.exports = userRouter;