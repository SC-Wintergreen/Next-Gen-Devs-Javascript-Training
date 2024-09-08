const express = require("express");
const router = express.Router();
const path = require("path");

const products = [];

router.get("/add-users", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-users.html"));
});

router.post("/add-users", (req, res) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
