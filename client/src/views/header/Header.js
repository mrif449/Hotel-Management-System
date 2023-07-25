import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <section className="header">

            <div className="flex">
                <a href="#home" className="logo">Hotel Sea Marmite</a>
                <a href="#availability" className="btn">check availability</a>
                <div id="menu-btn" className="fas fa-bars"></div>
            </div>

            <Nav />

        </section>
    );
}

export default Header;