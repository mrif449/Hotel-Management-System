import React from "react";

const Header = () => {
    return (
        <section class="header">

            <div class="flex">
                <a href="#home" class="logo">Hotels And Resorts</a>
                <a href="#availability" class="btn">check availability</a>
                <div id="menu-btn" class="fas fa-bars"></div>
            </div>

            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#reservation">reservation</a>
                <a href="#gallery">gallery</a>
                <a href="#contact">contact</a>
                <a href="#reviews">reviews</a>
            </nav>

        </section>
    );
}

export default Header;