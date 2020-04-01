require("dotenv").config();
const express = require("express");
const server = express();
const sendMail = require("./index");
const { log } = console;
const path = require("path");

//Data parsing
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//send email 
server.post('/email', (req, res) => {
  const { email, subject, text } = req.body;
  console.log("Data: ", req.body);
  //  res.json({message: "message received"})

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      log("Error", err)
      res.status(500).json({ message: "Internal Error" });
    } else {
      log("Email sent")
      res.json({ message: "Email Sent" })
    }
  });

})


server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));

  // console.log("That's is working")
})


const PORT = process.env.PORT || 2050;
server.listen(PORT, () =>
  log(`\n===Server is working on ${PORT}===\n`)
)
