const http = require("http");
const { json } = require("stream/consumers");
const data = require("./data");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "json",
  });

  res.write(JSON.stringify(data));

  res.end();
});

server.listen(3002);
