
import React from 'react';

const staffData = [
  { id: 1, name: 'John Doe', position: 'Manager' },
  { id: 2, name: 'Jane Smith', position: 'Receptionist' },

];

const userData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@hotelseamarmite.com' },
  { id: 2, name: 'Bob Williams', email: 'bob@hotelseamarmite.com' },
  
];

const reservationsData = [
  { id: 1, room: '101', user: 'Alice Johnson', date: '2023-08-20' },
  { id: 2, room: '102', user: 'Bob Williams', date: '2023-08-25' },

];

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1 className="page-heading">Admin Panel</h1>
      <div className="table-container">
        <h2 className="table-heading">User Data</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-container">
        <h2 className="table-heading">Staff Data</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map(staff => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.position}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2 className="table-heading">Reservations</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Room</th>
              <th>User</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reservationsData.map(reservation => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.room}</td>
                <td>{reservation.user}</td>
                <td>{reservation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default AdminPanel;
