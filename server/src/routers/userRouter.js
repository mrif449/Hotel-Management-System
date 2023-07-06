const express = require("express");
//const { getUsers, getUserById, deleteUserById, processRegister } = require("../controllers/userController");
const userRouter = express.Router();

// GET: api/users
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUserById);
userRouter.post("/process-register", processRegister);

module.exports = userRouter;