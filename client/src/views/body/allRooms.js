import React from 'react';

const roomData = [
  {
    roomType: 'Deluxe Suite',
    price: '$200',
    image: 'images/home-img-1.jpg'
  },
  {
    roomType: 'Standard Room',
    price: '$150',
    image: 'images/gallery-img-2.webp'
  },
  {
    roomType: 'Standard Room',
    price: '$150',
    image: 'images/home-img-1.jpg'
  },
  {
    roomType: 'Standard Room',
    price: '$150',
    image: 'images/gallery-img-3.webp'
  },

];

const RoomList = () => {
  return (
    <section className="room-list">
      <h2 className="page-heading">Room List</h2>
      <div className="room-list-container">
        {roomData.map((room, index) => (
          <div className="room-card" key={index}>
            <div
              className="room-image"
              style={{ backgroundImage: `url(${room.image})` }}
            ></div>
            <h3 className="room-type">{room.roomType}</h3>
            <p className="room-price">{room.price}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomList;

