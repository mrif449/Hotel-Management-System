import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";
import ServicesComponent from "./home-page/services";
import GalleryComponent from "./home-page/gallery";
import FeedbackComponent from "./home-page/feedback";
import ReservationComponent from "./home-page/reservation";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
            <ReservationComponent />
            <GalleryComponent />
            <FeedbackComponent />
        </div>
    );
}

export default Body;