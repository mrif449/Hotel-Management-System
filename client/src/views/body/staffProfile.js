import React from 'react';

const StaffProfile = () => {
    
    const staffData = {
        fullName: "John Doe",
        email: "john@doe.com",
        phoneNumber: "0123456789",
        nidNumber: "12345678901234567",
        staffType: "Manager",
        profilePic: "https://www.w3schools.com/howto/img_avatar.png"
    }

    return (
        <div className="staff-profile">
            <div className="header">
                <h2>Staff Profile</h2>
            </div>
            <div className="image">
                <img src={staffData.profilePic} alt={staffData.fullName} />
            </div>
            <div className="details">
                <h3>{staffData.fullName}</h3>
                <p>Email: {staffData.email}</p>
                <p>Phone Number: {staffData.phoneNumber}</p>
                <p>NID Number: {staffData.nidNumber}</p>
                <p>Staff Type: {staffData.staffType}</p>
            </div>
        </div>
    );
}

export default StaffProfile;
