const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  reservationDate: { type: Date, required: true },
  dateOfBirth: {type: Date, required: true},
  gender: {type: String, required: true},
  idNumber: {type: Number, required: true},
  cardNumber: {type: Number, required: true},
  nationality: {type: Number, required: true},
  emergencyContact: {type: Number, required: true},
  purpose: {type: String, required: false},
});

const Guest = mongoose.model('Guest', guestSchema);
module.exports = Guest;
