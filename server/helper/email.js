const nodemailer = require("nodemailer"); //TODO: npm install nodemailer
const { smtpUsername, smtpPassword } = require("../secret")

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: smtpUsername, // generated ethereal user
        pass: smtpPassword, // generated ethereal password
    },
});

const EmailWithNodeMailer = async (emailData) => {
    try {
        const mailOptions = {
            from: smtpUsername, // sender address
            to: emailData.email, // list of receivers
            subject: emailData.subject, // Subject line
            html: emailData.html, // html body
        }
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s",info.response);
    } catch (error) {
        console.error("Error occurred while sending email", error);
        throw error;
    }
};


module.exports = EmailWithNodeMailer;