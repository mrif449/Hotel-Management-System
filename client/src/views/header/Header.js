import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return (
        <section className="header">

            <div className="flex">
                <Link to="/" className="btn">Hotel Sea Marmite</Link>
                <Link to="/login" className="btn" style={{marginLeft : "10px;"}}>Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
                <div id="menu-btn" className="fas fa-bars"></div>
            </div>

            <Nav />

        </section>
    );
}

export default Header;