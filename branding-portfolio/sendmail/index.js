
const server = require("./server");


const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "jacquelineOmollo@gmail.com",
    subject,
    text
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}


module.exports = sendMail;
