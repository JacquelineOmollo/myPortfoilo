require("dotenv").config();


const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailgun(auth));
// {service: "gmail",
// auth: {
//   user: process.env.EMAIL,
//   password: process.env.PASSWORD
// }

const mailOptions = {
  from: "jlomollo@gmail.com",
  to: "jacquelineOmollo@gmail.com",
  subject: " Welcome ",
  text: "It works"
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Email Sent");
  }
});
