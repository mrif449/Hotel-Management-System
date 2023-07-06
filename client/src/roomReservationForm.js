import React, { useState } from 'react';
import axios from 'axios';

const RoomReservationForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = {
        roomNumber,
        guestName,
        checkInDate,
        checkOutDate,
      };
      const response = await axios.post('/api/reservations', reservationData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Room Number:
        <input
          type="number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Guest Name:
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
        />
      </label>
      <label>
        Check-in Date:
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RoomReservationForm;
