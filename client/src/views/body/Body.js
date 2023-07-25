import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";
import ServicesComponent from "./home-page/services";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
        </div>
    );
}

export default Body;