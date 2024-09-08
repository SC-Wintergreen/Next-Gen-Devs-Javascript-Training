const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.render("addUsers");
});

router.post("/", (req, res) => {
  console.log(req.body.title);
  users.push(req.body.title);
  res.redirect("/users");
});

exports.routes = router;
exports.products = users;
