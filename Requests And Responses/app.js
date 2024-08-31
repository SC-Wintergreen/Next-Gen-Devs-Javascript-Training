// Creating A Server

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<title>Enter Message </title>");
    res.write("<body>");
    res.write('<form action="/message" method="POST">');
    res.write(
      '<input type="text" name="message" placeholder="Enter Message"/>'
    );
    res.write('<button type="submit">Submit</button></form>');
    res.write("</body>");
    res.write("</html>");
    return res.end();

  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });


    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // process.exit();

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<title>My Response Page </title>");
  res.write("<body>");
  res.write("<h1>Hello From My Node JS Server </h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
