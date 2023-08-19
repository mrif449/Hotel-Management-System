const dbinit = require("./app");
const connectDatabase = require("../server/controllers/config/db");
const logger = require("./controllers/loggerController");
// const { serverPort } = require("./secret");
const serverPort = 3001
dbinit()
