const express = require('express');
const ReservationRouter = express.Router();
const {Reservation} = require('./models/model');

// Create a new reservation
ReservationRouter.post('/reservations', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reservations' })
    }
});

module.exports = ReservationRouter;