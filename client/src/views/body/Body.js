import React from "react";
import { Route, Routes } from "react-router";
import HomePageComponent from "./home-page/home-page";
import Login from "./authentication-page/login";
import SignIn from "./authentication-page/signin";
import AdminPanel from "../adminPanel";
import StaffProfile from "./staffProfile";
import RoomList from "./allRooms";
import RoomInfo from "./roomInfo";

const Body = ({User, setUser}) => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<HomePageComponent User={User}/>} />
                <Route path="/login" exact element={<Login setUser={setUser}/>} />
                <Route path="/signup" exact element={<SignIn />} />
                <Route path="/admin_panel" exact element={<AdminPanel />} />
                <Route path="/staff_profile/:staff_id" exact element={<StaffProfile />} />
                <Route path="/available_rooms" exact element={<RoomList />} />
                <Route path="/available_rooms/:room_id" exact element={<RoomInfo />} />
            </Routes>
        </div>
    );
}

export default Body;