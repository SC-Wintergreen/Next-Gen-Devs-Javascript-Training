const express = require("express");
const router = express.Router();

const addUserData = require("./addUsers");

router.get("/", (req, res) => {
  const users = addUserData.products;
  res.render("users", { arr: users });
});

exports.routes = router;
