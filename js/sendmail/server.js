const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const log = console.log;
const path = require("path");

server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "myportfoilo", "index.html"));

  // console.log("That's is working");
})


const PORT = process.env.PORT || 2050;
server.listen(PORT, () =>
  log(`n/===Server is working on ${PORT}"===/n`)
)
