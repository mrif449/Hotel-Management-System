// External Imports
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const createError = require('http-errors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Guest = require('./models/model');



// Initialize App
const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan('dev'));

// Routers
const { mongodbURL } = require('./secret');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const reservationRouter = require('./routes/reservationRouter');
const seedRouter = require('./routes/seedRouter');

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/reservations', reservationRouter);
app.use('/seed', seedRouter);

// Limiting requests from same IP in a certain time
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: 'Too many requests from this IP. Please try again later.',
});

// Create a new guest
app.post('/api/guests', rateLimiter, (req, res) => {
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

// Get requests
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'The Server & API is Online',
    });
});

// Client error handling
app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

// Server error handling -> All errors will come here
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

// Connect to DB
const dbinit = () => {
  mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
        console.log('Database Connection Successful');
        // Listen to Server
        const server = app.listen(3001, () => {
            console.log(`Server is running on port ${3001}`);
        });
    })
    .catch((err) => {
        console.error('Database Connection Error:', err);
    });
}

module.exports = dbinit