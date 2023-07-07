//External Imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

//Internal Imports
const loginRouter = require('./routes/loginRouter')

//Initialize App
const app = express()
dotenv.config()

//Connect to DB
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database Connection Successful"))
.catch(err => console.log(err))

//Request Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET))

//Routers
app.use("/login", loginRouter)

//Listen to Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
