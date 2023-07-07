require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3000;
const mongodbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/hotelManagementSystem";
const clientURL = process.env.CLIENT_URL || "http://localhost:3000"

module.exports = { serverPort, mongodbURL, defaultImagePath,clientURL};