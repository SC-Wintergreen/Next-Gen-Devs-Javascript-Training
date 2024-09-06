import express from "express";
import { connection } from "./postgres/postgres.js";

const server = express();

const PORT = 3000;

server.listen(PORT, (req, res, next) => {
  console.log(`Server is running at Port ${PORT}`);
});

connection();
