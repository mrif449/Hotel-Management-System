import React from "react";
import { Route, Routes } from "react-router";
import HomePageComponent from "./home-page/home-page";
import Login from "./authentication-page/login";
import SignIn from "./authentication-page/signin";

const Body = ({User, setUser}) => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<HomePageComponent />} />
                <Route path="/login" exact element={<Login setUser={setUser}/>} />
                <Route path="/signup" exact element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default Body;