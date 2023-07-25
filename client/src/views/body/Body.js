import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";
import ServicesComponent from "./home-page/services";
import GalleryComponent from "./home-page/gallery";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
            <GalleryComponent />
        </div>
    );
}

export default Body;