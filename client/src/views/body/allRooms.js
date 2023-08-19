import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";

const RoomList = () => {

  const roomData = [
    {
      _id: 1,
      room_type: 'Deluxe Suite',
      price_per_day: 200,
      capacity: 4,
    },
    {
      _id: 2,
      room_type: 'Standard Room',
      price_per_day: 150,
      capacity: 2,
    },
    {
      _id: 3,
      room_type: 'Standard Room',
      price_per_day: 150,
      capacity: 2,
    },
    {
      _id: 4,
      room_type: 'Standard Room',
      price_per_day: 150,
      capacity: 3,
    },
  
  ];

  const [rooms, setRooms] = useState(roomData);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/reservations/available-rooms')
      .then(res => {
        if(res.ok){
          return res.json()
        }
        throw new Error(`HTTP error! Status: ${res.status}`);
      })
      .then(data => {
        console.log(data);
        setRooms(data);
      })
      .catch(err => {
        console.log(err)
        setRooms(roomData);
      });
  }, [])
    

  const {check_in, check_out, UserId} = useParams();
  console.log(check_in, check_out, UserId);

  const handleClick = (room_id) => {
    navigate(`/available_rooms/${room_id}`, {state: {check_in, check_out, UserId, room_id}});
  }

  const handleBook = async (room_id) => {
    try{
      await fetch('/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({room_id, check_in, check_out, UserId})
      });
    }
    catch(err){
      console.log(err);
      window.alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <section className="room-list">
      <h2 className="page-heading">Room List</h2>
      <div className="room-list-container">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <div
              className="room-image"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(room._id)}
            >
              <img className='room-image' src="images/gallery-img-2.webp" alt="room" />
            </div>
            <h3 className="room-type">Room Type: {room.room_type}</h3>
            <p className="room-price">Price Per Night: ${room.price_per_day}</p>
            <p className="room-price">Capacity: {room.capacity}</p>
            <button className="book-button" onClick={() => handleBook(room._id)}>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomList;

