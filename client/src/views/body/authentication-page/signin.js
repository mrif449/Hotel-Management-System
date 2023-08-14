import React from "react";

const SignIn = () => {
    return (
        <section className="login" id="login">
            <div className="login-container">
                <form className="login-form">
                    <h3>SignIn</h3>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" className="form-control" placeholder="Confirm password" />
                    </div>
                    <button className="btn">
                        Sign In 
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
