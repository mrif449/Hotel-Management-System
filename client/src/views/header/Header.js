import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ user, setUser }) => {

    const handleLogOut = async () => {
        await fetch("/api/auth/logout", {
            method: "DELETE",
        }).then((res) => {
            if (res.status === 200) {
                setUser(null);
            }
            else {
                console.log("Error logging out");
            }
        })
    }

    return (
        <section className="header">
            <div className="flex">
                <Link to="/" className="btn">Hotel Sea Marmite</Link>
                {user ? (
                    <>
                        <button className="btn" onClick={handleLogOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn">Login</Link>
                        <Link to="/signup" className="btn">Sign Up</Link>
                    </>
                )}
                <div id="menu-btn" className="fas fa-bars"></div>
            </div>
            <Nav />
        </section>
    );
}

export default Header;
