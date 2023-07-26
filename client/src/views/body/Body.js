import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";
import ServicesComponent from "./home-page/services";
import GalleryComponent from "./home-page/gallery";
import FeedbackComponent from "./home-page/feedback";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
            <GalleryComponent />
            <FeedbackComponent />
        </div>
    );
}

export default Body;