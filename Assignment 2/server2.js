const express = require("express");
const app = express();
const PORT = 3002;

app.use("/users", (req, res, next) => {
  res.status(200).send("<h1>This is the users page</h1>");
  res.end();
});
app.use("/", (req, res, next) => {
  res.status(200).send("<h1>This is the base url page</h1>");
  res.end();
});

app.listen(PORT);
