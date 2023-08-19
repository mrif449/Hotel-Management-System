//External Imports
const express = require('express')
const Reservation = require('../models/model');
const userRouter = require('./userRouter'); // The correct path to your userRouter file


//Internal Imports
const {getLoginPage, login, logout, register, activateUserAccount, getUsers} = require('../controllers/loginController')
const {logInValidators, validationResultHandler} = require('../middlewares/login/loginValidator')

//Initialize Router
const router = express.Router()

//Get login page
router.get('/', getLoginPage)

//Login
router.post('/', logInValidators, validationResultHandler, login)

//Logout
router.delete('/', logout)

// Register
router.post("/register",register);

// activate user account
router.post("/activate", activateUserAccount);

// get all users
router.get("/users", getUsers);


//activate user account
userRouter.post("/activate", activateUserAccount);




// Create a new reservation
router.post('/reservation', async (req, res) => {
    try {
      const { guestName, room_id, start_datetime, end_datetime } = req.body;
      const reservation = new Reservation({
        guestName,
        room_id,
        start_datetime,
        end_datetime,
      });
      await reservation.save();
      res.status(201).json({ message: 'Reservation created successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the reservation.' });
    }
  });
  
  // Fetch all reservations
  router.get('/reservation-list', async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching reservations.' });
    }
  });

// Create a new feedback
router.post('/feedback', async (req, res) => {
    try {
      const { user_id, feedback, datetime } = req.body;
      const message = new Feedback({
        user_id,
        feedback,
        datetime,
      });
      await message.save();
      res.status(201).json({ message: 'Feedback created successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the feedback.' });
    }
  });
  
  // Fetch all feedbacks
  router.get('/feedback-list', async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching feedbacks.' });
    }
  });

module.exports = router;