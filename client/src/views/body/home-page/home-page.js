import React from "react";
import HomeComponent from "./home";
import AboutComponent from "./about";
import ServicesComponent from "./services";
import GalleryComponent from "./gallery";
import FeedbackComponent from "./feedback";
import ReservationComponent from "./reservation";
import FeedbackFormComponent from "./feedbackForm";

const HomePageComponent = ({User}) => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
            <ReservationComponent User={User}/>
            <GalleryComponent />
            <FeedbackComponent />
            <FeedbackFormComponent User={User}/>
        </div>
    )
}

export default HomePageComponent;