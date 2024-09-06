const express = require("express");
const router = express.Router();

router.get("/add-product", function (req, res) {
  res.send(
    "<html><body><form action='/admin/product' method='POST'><input type='text' placeholder='Enter Product Name' name='title' /><button type='submit'>Submit Data</button></form></body></html>"
  );
});

router.post("/product", function (req, res) {
  console.log(req.body);
  res.send("<h1>You Are On Product Page</h1>");
});

module.exports = router;
