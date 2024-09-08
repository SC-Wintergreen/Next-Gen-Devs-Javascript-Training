const express = require("express");
const router = express.Router();
const path = require("path");

const adminData = require("./add-users");

router.get("/", (req, res) => {
  console.log("In Shop.js File", adminData.products);
  res.sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = router;
