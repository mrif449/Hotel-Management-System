import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ReservationComponent = ({User}) => {

  const [check_in, setCheckIn] = useState("");
  const [check_out, setCheckOut] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      navigate(`/available_rooms`, {state: {check_in, check_out, UserId: User._id}});
    }
    else{
      window.alert("Please login to continue");
    }
  };

  return (
    <section className="reservation" id="reservation">
      <form onSubmit={handleSubmit}>
        <h3>make a reservation</h3>
        <div className="flex">
          <div className="box">
            <p>check in <span>*</span></p>
            <input type="date" name="check_in" className="input" required onChange={e => setCheckIn(e.target.value)}/>
          </div>
          <div className="box">
            <p>check out <span>*</span></p>
            <input type="date" name="check_out" className="input" required onChange={e => setCheckOut(e.target.value)}/>
          </div>
          <div className="box">
            <p>adults <span>*</span></p>
            <select name="adults" className="input" required>
              <option value="1">1 adult</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
              <option value="5">5 adults</option>
              <option value="6">6 adults</option>
            </select>
          </div>
          <div className="box">
            <p>children <span>*</span></p>
            <select name="children" className="input" required>
              <option value="-">0 child</option>
              <option value="1">1 child</option>
              <option value="2">2 children</option>
              <option value="3">3 children</option>
              <option value="4">4 children</option>
              <option value="5">5 children</option>
              <option value="6">6 children</option>
            </select>
          </div>
          <div className="box">
            <p>rooms <span>*</span></p>
            <select name="rooms" className="input" required>
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6 rooms</option>
            </select>
          </div>
        </div>
        <input type="submit" value="check availability" name="check" className="btn" />
      </form>
    </section>
  );
};

export default ReservationComponent;
