import React from "react";

const Login = () => {
    return (
        <section className="login" id="login">
            <div className="login-container">
                <form className="login-form">
                    <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <button className="btn" style={{ marginRight: "10px" }} >Submit</button>
                    <button className="btn">
                        Sign In <i>if you don't have an account</i>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
