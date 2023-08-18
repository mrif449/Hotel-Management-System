const app = require("./app");
const connectDatabase = require("./config/db");
const logger = require("./controllers/loggerController");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
    logger.log("info",`Server is running at http://localhost:${serverPort}`);
    await connectDatabase();
});
