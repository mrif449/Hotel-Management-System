const express = require("express");
const seedRouter = express.Router();
const { seedUser } = require("../controllers/seedController"); //TODO: create seedController.js


seedRouter.get("/users", seedUser);

module.exports = seedRouter;