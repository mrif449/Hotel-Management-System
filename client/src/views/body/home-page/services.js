import React from "react";

const ServicesComponent = () => {
    const services = [
        {
            image: "images/icon-1.png",
            title: "food & drinks",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        {
            image: "images/icon-2.png",
            title: "outdoor dining",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        {
            image: "images/icon-3.png",
            title: "beach view",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        {
            image: "images/icon-4.png",
            title: "decorations",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        {
            image: "images/icon-5.png",
            title: "swimming pool",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        {
            image: "images/icon-6.png",
            title: "resort beach",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?",
        },
        // Add more services if needed
    ];

    const renderServices = () => {
        return services.map((service, index) => (
            <div class="box" key={index}>
                <img src={service.image} alt="" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        ))
    }

    return (
        <section class="services">
            <div class="box-container">
                {renderServices()}
            </div>
        </section>
    )
}

export default ServicesComponent;