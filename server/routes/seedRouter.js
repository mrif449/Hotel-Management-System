const express = require("express");
const seedRouter = express.Router();
const {  seedStaff } = require("../controllers/seedController"); 


seedRouter.get("/users", seedStaff);

module.exports = seedRouter;