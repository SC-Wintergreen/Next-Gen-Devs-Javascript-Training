const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const server = express();

// Body Parser
server.use(bodyParser.urlencoded({ extended: false }));
// Static Serving
server.use(express.static(path.join(__dirname, "public")));

server.use("/admin", adminRoutes);
server.use(shopRoutes);

server.use("/", (req, res) => {
  res.send(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

server.listen(process.env.PORT, (req, res) => {
  console.log("The Server Is Running On PORT " + process.env.PORT);
});
