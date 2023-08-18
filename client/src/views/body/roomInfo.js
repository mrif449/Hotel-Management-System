import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const RoomInfo = () => {

    const roomData = {
        _id: 1,
        room_type: 'Deluxe Suite',
        price_per_day: 200,
        capacity: 4,
    }

    const [room, setRoom] = useState(roomData);
    const {check_in, check_out, UserId, room_id} = useParams();
    console.log(check_in, check_out, UserId, room_id);

    useEffect(() => {
        fetch(`/api/room/:${room_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRoom(data);
            })
            .catch(err => {
                console.log(err)
                setRoom(roomData);
            });
    }, [])

    const handleBook = async () => {
        try{
          await fetch('/api/reservation', {
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
        <div className="room-info-container">
            <div className="room-image">
            <img src="images/gallery-img-2.webp" alt="room" />
            </div>
            <div className="room-details">
                <h2 className="room-name">{room.room_type}</h2>
                <p className="room-price">${room.price_per_day} per night</p>
                <p className="room-price">{room.capacity}</p>
                <p className="room-description">Spacious and luxurious room with a beautiful view.</p>
                <h3 className="section-title">Facilities</h3>
                <ul className="facilities-list">
                    <li>Free Wi-Fi</li>
                    <li>Air Conditioning</li>
                    <li>Mini Bar</li>
                </ul>
                <button className="btn book-btn" onClick={handleBook}>Book Now</button>
            </div>
        </div>
    );
};

export default RoomInfo;
