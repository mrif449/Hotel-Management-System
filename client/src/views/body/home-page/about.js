import React from 'react';

const AboutComponent = () => {
    return (
        <section className="about" id="about">

            <div className="row">
                <div className="image">
                    <img src="images/about-img-1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>best staff</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                    <a href="#reservation" className="btn">make a reservation</a>
                </div>
            </div>

            <div className="row revers">
                <div className="image">
                    <img src="images/about-img-2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>best foods</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                    <a href="#contact" className="btn">contact us</a>
                </div>
            </div>

            <div className="row">
                <div className="image">
                    <img src="images/about-img-3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>swimming pool</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                    <a href="#availability" className="btn">check availability</a>
                </div>
            </div>

        </section>

    )
}

export default AboutComponent