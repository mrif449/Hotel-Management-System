// importing packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

// limiting requests from same IP in certain time
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests from this IP. Please try again later."
});


// using packages
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// users Router
app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter);

// get requests
app.get("/test", (req, res) => {
    res.status(200).send({
        message: "The Server & API is Online",
    });
});




//client error handling
app.use((req, res, next) => {
    next(createError(404, "Route not found"));
});

//server error handling -> all error will come here
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    });
});

// exporting app module
module.exports = app;