const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", function (req, res) {
  res.redirect("/");
});

module.exports = router;
