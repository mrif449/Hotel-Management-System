const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
