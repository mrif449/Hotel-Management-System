import React, {useState} from "react";

const SignIn = () => {
    
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirm_password) {
            window.alert("Passwords do not match.");
            return;
        }

        const signInData = { name, email, phone, password };

        try {
            const response = await fetch("/login/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signInData)
            });

            if (response.status === 200) {
                window.alert("Sign In Successful!");
            } else {
                window.alert("Something went wrong. Please try again later.");
            }
        }
        catch (error) {
            window.alert("Something went wrong. Please try again later.");
            console.log(error);
        }
    
    }

    return (
        <section className="login" id="login">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>SignIn</h3>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="form-control" 
                            placeholder="Enter your username" 
                            required
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Enter your email address" 
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="text" 
                            id="phone" 
                            className="form-control" 
                            placeholder="Enter your phone number" 
                            required
                            onChange={e => setPhoneNumber(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm_password" 
                            className="form-control" 
                            placeholder="Confirm password" 
                            required 
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
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
