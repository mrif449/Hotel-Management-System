const express = require('express');
const ReservationRouter = express.Router();
const { Reservation, Room } = require('../models/model');

// Create a new reservation
ReservationRouter.post('/reservations', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create reservation' });
    }
});



// Fetch available rooms
ReservationRouter.get('/available-rooms', async (req, res) => {
    try {
        // Find rooms that are available (availability is true)
        const availableRooms = await Room.find({ availability: true });
        res.status(200).json(availableRooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch available rooms' });
    }
});

// fetch room by id
ReservationRouter.get('/available-rooms/:id', async (req, res) => {
    try {
        const roomId = req.params.room_id;
        // Find rooms that are available (availability is true)
        const availableRooms = await Room.find({ _id: roomId });
        res.status(200).json(availableRooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch available rooms' });
    }
});

module.exports = ReservationRouter;
