const express = require("express");
const app = express();
const PORT = 3001;

app.use(function (req, res, next) {
  console.log("Through First Middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("This Middleware Logs A Response");
  res.send("<h1> This is a response from Second MiddleWare</h1>");
});
app.listen(PORT);
