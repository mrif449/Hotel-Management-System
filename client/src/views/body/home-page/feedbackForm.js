import React from "react";

const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
}

const FeedbackFormComponent = () => {
    return (
        <section className="feedbackForm" id="feedbackForm">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <h3>Send Us Your Valuable Feedback </h3>
                    <textarea name="msg" className="box" required placeholder="enter your feedback" cols="30" rows="10" ></textarea>
                    <input type="submit" value="send message" name="send" className="btn" />
                </form>
            </div>
        </section>
    )
};

export default FeedbackFormComponent;