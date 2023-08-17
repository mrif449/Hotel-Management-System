import React, {useState} from "react";

const FeedbackFormComponent = ({User}) => {

    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(User === null){
            window.alert("Please login to send feedback");
            return;
        }
        
        const feedbackData = { user_id: User._id, feedback, datetime: new Date() };
        try{
            const response = await fetch("/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(feedbackData)
            });
            const data = await response.json();
            console.log(data);
            window.alert("Feedback sent successfully");
        }
        catch (err) {
            console.log(err);
            window.alert("Feedback not sent");
        }

    }

    return (
        <section className="feedbackForm" id="feedbackForm">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <h3>Send Us Your Valuable Feedback </h3>
                    <textarea 
                        name="msg" 
                        className="box" 
                        required 
                        placeholder="enter your feedback" 
                        cols="30" 
                        rows="10" 
                        onChange={(e) => setFeedback(e.target.value)}
                    >
                    </textarea>
                    <input type="submit" value="send message" name="send" className="btn" />
                </form>
            </div>
        </section>
    )
};

export default FeedbackFormComponent;