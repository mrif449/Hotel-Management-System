import React from 'react';

const RoomInfo = () => {
    return (
        <div className="room-info-container">
            <div className="room-image">
            <img src="images/gallery-img-2.webp" alt="room" />
            </div>
            <div className="room-details">
                <h2 className="room-name">Deluxe Room</h2>
                <p className="room-price">$200 per night</p>
                <p className="room-description">Spacious and luxurious room with a beautiful view.</p>
                <h3 className="section-title">Facilities</h3>
                <ul className="facilities-list">
                    <li>Free Wi-Fi</li>
                    <li>Air Conditioning</li>
                    <li>Mini Bar</li>
                </ul>
                <button className="btn book-btn">Book Now</button>
            </div>
        </div>
    );
};

export default RoomInfo;
