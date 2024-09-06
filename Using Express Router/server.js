const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const server = express();

// Body Parser
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/admin", adminRoutes);
server.use(shopRoutes);

server.use("/", (req, res) => {
  res.status(404).send("<h1>Error 404 Page Not Found");
});

server.listen(process.env.PORT, (req, res) => {
  console.log("The Server Is Running On PORT " + process.env.PORT);
});
