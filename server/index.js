//External Imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const createError = require('http-errors')
const morgan = require('morgan') //TODO: npm install morgan
const rateLimit = require('express-rate-limit') //TODO: npm install express-rate-limit
const cookieParser = require('cookie-parser')

//Internal Imports
const {mongodbURL} = require('./secret')
const loginRouter = require('./routes/loginRouter')
const userRouter = require("./routes/userRouter")
const reservationRouter = require("./routes/reservationRouter")
const seedRouter = require("./routes/seedRouter")

//Initialize App
const app = express()
dotenv.config()

// limiting requests from same IP in certain time
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests from this IP. Please try again later."
});

//Connect to DB
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database Connection Successful"))
.catch(err => console.log(err))

//Morgan
app.use(morgan("dev"));

//Request Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET))

//Routers
app.use("/login", loginRouter)
app.use("/users", userRouter)
app.use("/reservations", reservationRouter)
app,use("/seed", seedRouter)

// get requests
app.get("/test", (req, res) => {
    res.status(200).send({
        message: "The Server & API is Online",
    });
});

//client error handling
app.use((req, res, next) => {
    next(createError(404, "Route not found"))
})

//server error handling -> all error will come here
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    })
})

//Listen to Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
