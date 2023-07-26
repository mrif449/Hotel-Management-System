//External Imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const Guest = require('./models/guest');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a new guest
app.post('/api/guests', (req, res) => {
    const { name, address, email, phoneNumber, reservationDate } = req.body;
    const newGuest = new Guest({ name, address, email, phoneNumber, reservationDate });
  
    newGuest.save()
      .then((guest) => {
        res.json(guest);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to create guest.' });
      });
  });

  // Get all guests
app.get('/api/guests', (req, res) => {
    Guest.find()
      .then((guests) => {
        res.json(guests);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to fetch guests.' });
      });
  });

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
