import React from "react";

export default function RoomInfo() {
  const roomData = {
    roomNumber: "101",
    type: "Deluxe Double",
    price: "$150",
    features: [
      "King-size bed",
      "Balcony",
      "Mini-fridge",
      "TV",
      "Air conditioning",
    ],
    facility: ["Free Wi-Fi", "Room service", "Free breakfast"],
    images: ["home-img-1.jpg"],
  };

  return (
    <>
      <div>
        <div>
          <h1>Room {roomData.roomNumber}</h1>
          <p>Type: {roomData.type}</p>
          <p>Price: {roomData.price} per night</p>
        </div>
        <div>
          <h2>Specifications</h2>
          <div>
            <h3>Features:</h3>
            <ul>
              {roomData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Facility:</h3>
            <ul>
              {roomData.facility.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2>Room Gallery</h2>
          <div>
            {roomData.images.map((image, index) => (
              <img key={index} src={image} alt={`Room ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
