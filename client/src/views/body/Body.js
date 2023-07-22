import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
        </div>
    );
}

export default Body;