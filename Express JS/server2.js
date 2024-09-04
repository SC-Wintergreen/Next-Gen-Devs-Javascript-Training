const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(morgan("combined"));

server.use(express.static("public"));

// MiddleWares
// server.use((req, res, next) => {
//   console.log(req.method);
//   console.log(req.ip);
//   console.log(req.hostname);
//   console.log(req.get("User-Agent"));

//   next();
// });

// // bodyParser
// server.use(express.json());

// // Middle Ware Checks For Queries
// const auth = (req, res, next) => {
//   //   console.log(req.query);
//   console.log(req.body);
//   if (req.body.password === "1234") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };

// API - Endpoint -Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.listen(3001);
