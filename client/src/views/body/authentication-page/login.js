import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            });

            if (response.status === 200) {
                const { payload } = await response.json();
                const user = payload.userWithoutPassword;
                setUser(user);

                //Redirecting Manager to admin panel, staff to staff profile and guest to home page
                if (user.staff_type === "Manager") {
                    navigate("/admin_panel");
                } else if (user.staff_type === "Staff") {
                    navigate("/staff_profile");
                } else if (user.staff_type === "Guest") {
                    navigate("/");
                }
            } else {
                window.alert("Invalid username or password");
            }
        } catch (error) {
            window.alert("Something went wrong. Please try again later.");
            console.log(error);
        }
    }

    return (
        <section className="login" id="login">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
