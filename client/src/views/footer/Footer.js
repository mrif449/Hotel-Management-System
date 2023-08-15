import React from "react";

const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <a href="tel:1234567890"><i className="fas fa-phone"></i> +123-456-7890</a>
                        <a href="tel:1112223333"><i className="fas fa-phone"></i> +111-222-3333</a>
                        <a href="seamarmite420@gmail.com"><i className="fas fa-envelope"></i> seamarmite420@gmail.com</a>
                        <a href="/"><i className="fas fa-map-marker-alt"></i> Cox's Bazar - Bangladesh</a>
                    </div>

                    <div className="box">
                        <a href="#home">home</a>
                        <a href="#about">about</a>
                        <a href="#reservation">reservation</a>
                        <a href="#gallery">gallery</a>
                        <a href="#reviews">reviews</a>
                    </div>

                    <div className="box">
                        <a href="/">facebook <i className="fab fa-facebook-f"></i></a>
                        <a href="/">twitter <i className="fab fa-twitter"></i></a>
                        <a href="/">instagram <i className="fab fa-instagram"></i></a>
                    </div>

                </div>

                <div className="credit">&copy; copyright @ 2023 Marmite-Innovations | all rights reserved!</div>

            </section>
        </div>
    );
}

export default Footer;