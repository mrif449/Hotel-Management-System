//External Imports
const express = require('express')
const Reservation = require('../models/model');

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
router.get("/register",register);

// activate user account
router.post("/activate", activateUserAccount);

// get all users
router.get("/users", getUsers);

//delete user by ID
userRouter.delete("/:id", isLoggedIn, deleteUserById);

//activate user account
userRouter.post("/activate", isLoggedOut, activateUserAccount);

//ban user by id
userRouter.put("/ban-user/:id", isLoggedIn, isAdmin, handleBanUserById);

//unban user by id
userRouter.put("/unban-user/:id", isLoggedIn, isAdmin, handleUnbanUserById);



// Create a new reservation
router.post('/create', async (req, res) => {
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
  router.get('/list', async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching reservations.' });
    }
  });

module.exports = router;