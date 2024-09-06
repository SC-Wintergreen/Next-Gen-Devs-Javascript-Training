const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1> Server Running On PORT ${process.env.PORT}</h1>`);
});

module.exports = router;
