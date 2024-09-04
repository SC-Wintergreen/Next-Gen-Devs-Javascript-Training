const express = require("express");
const fs = require("fs");
const path = require("path");

const filePath = `${path.join(__dirname)}/index.html`;
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  res.sendFile(filePath);
  res.json(data);
  res.sendStatus(404).send("<h1>Not Found</h1>");
});

server.listen(3000, () => {
  console.log("Server Started");
});
