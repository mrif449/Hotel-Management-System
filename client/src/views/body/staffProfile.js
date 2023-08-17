import React, {useState, useEffect} from 'react';

const StaffProfile = ({User}) => {
    
    const staffData = {
        fullName: "John Doe",
        email: "john@doe.com",
        phoneNumber: "0123456789",
        nidNumber: "12345678901234567",
        staffType: "Manager",
        profilePic: "https://www.w3schools.com/howto/img_avatar.png"
    }

    const [staff, setStaff] = useState(staffData);

    useEffect(() => {
        if (User) {
            fetch(`/api/staff/${User._id}`)
                .then(res => res.json())
                .then(data => {
                    setStaff(data.payload);
                })
                .catch(err => {
                    console.log(err)
                    setStaff(staffData);
                });
        }
    }, [])
    
    return (
        <div className="staff-profile">
            <div className="header">
                <h2>Staff Profile</h2>
            </div>
            <div className="image">
                <img src={staffData.profilePic} alt={staffData.fullName} />
            </div>
            <div className="details">
                <h3>{staff.fullName}</h3>
                <p>Email: {staff.email}</p>
                <p>Phone Number: {staff.phoneNumber}</p>
                <p>NID Number: {staff.nidNumber}</p>
                <p>Staff Type: {staff.staffType}</p>
            </div>
        </div>
    );
}

export default StaffProfile;
