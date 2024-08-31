const http = require("http");

function dataControl(req, res) {
  res.write("Hello This is Sagnik");
  res.end();
}

const server = http.createServer(dataControl);

server.listen(3000);
