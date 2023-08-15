import React from "react";

// Example Profile data
const profileData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "images/staffPhoto.png"
  },
  {
    id: 1,
    name: "John Wimbly",
    designation: "General Manager",
image: "images/staffPhoto.png"
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "images/staffPhoto.png"
  },
  {
    id: 1,
    name: "John Wimbly",
    designation: "General Manager",
    image: "images/staffPhoto.png"
  },
  {
    id: 1,
    name: "John Wimbly",
    designation: "General Manager",
    image: "images/staffPhoto.png"
  },

];

const StaffProfile = () => {
  return (
    <>
    <div><h1 className="page-heading">Staff Profiles</h1></div>
    <div className="profile-container">
      {profileData.map(profile => (
        <div className="card" key={profile.id}>
          <div className="card-image" style={{ backgroundImage: `url(${profile.image})` }}>
          </div>
          <h2 className="card-name">{profile.name}</h2>
          <p className="card-designation">{profile.designation}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default StaffProfile;


