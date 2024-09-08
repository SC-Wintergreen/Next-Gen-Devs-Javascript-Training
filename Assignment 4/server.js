const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
dotenv.config();
const PORT = process.env.PORT;
const app = express();

const addUserData = require("./routes/addUsers");
const userData = require("./routes/users");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Static Server Middleware
app.use(express.static(path.join(__dirname, "public")));

// Setting the templating engine
app.set("view engine", "pug");
app.set("views", "views");

app.use("/users", userData.routes);
app.use("/", addUserData.routes);
app.use("/", (req, res) => {
  res.render("error404");
});

app.listen(PORT, (req, res) => {
  console.log("Server Running On PORT " + PORT);
});
