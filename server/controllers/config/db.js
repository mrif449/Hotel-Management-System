const mongoose = require("mongoose");
const { mongodbURL } = require("../../secret");
const logger = require("../../controllers/loggerController");
const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbURL, options);
        logger.log("info","Connection to MongoDB is established successfully");
        mongoose.connection.on("error", () => {
            logger.log("error","MongoDB connection error: ", error);
        })
    } catch (error) {
        logger.log("error","Could not connect to DB: ", error.toString());
    }
};

module.exports = connectDatabase;