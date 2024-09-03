const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");
const dummyData = JSON.parse(fs.readFileSync("dummyData.json", "utf-8"));

const prodData = dummyData.products[86];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;

    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/product":
      res.setHeader("Content-Type", "text/html");
      const modifiedIndex = index
        .replace("**TITLE**", prodData.title)
        .replace("**NEWPRICE**", prodData.price)
        .replace("**DISCOUNT**", prodData.discountPercentage)
        .replace("**RATING**", prodData.rating)
        .replace("**IMAGE**", prodData.images[0]);
      res.end(modifiedIndex);
      break;

    default:
      res.writeHead(404, "NT Found");
      res.end();
  }
  console.log("Server Started");
  console.log(req.url);
});

server.listen(3000);
