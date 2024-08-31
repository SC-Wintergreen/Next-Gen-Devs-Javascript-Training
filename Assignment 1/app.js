const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Greetings</title>');
        res.write('</head>');
        res.write('<body> <h1>Hello! Welcome To My Page</h1>');
        res.write(' <form method="POST" action="/create-user"><input type="text" placeholder="Username" name="username"></input>');
        res.write('<button type="submit">Submit</button> </form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/users') {
        
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Dummy Users</title>');
        res.write('</head>');
        res.write('<body> <ul>');
        res.write('<li><h3>Virat Kohli</h3></li>');
        res.write('<li><h3>Rohit Sharma</h3></li>');
        res.write('<li><h3>Jasprit Bumrah</h3></li>');
        res.write('<li><h3>Hardik Pandya</h3></li>');
        res.write('<li><h3>KL Rahul</h3></li>');
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/create-user' && method === "POST") {
        const reqBody = [];
        req.on('data', (chunk) => {
            
            reqBody.push(chunk);
        })

        req.on('end', () => {
            
            const parsedBody = Buffer.concat(reqBody).toString();
            console.log(parsedBody.split("=")[1]);
        })

        res.statusCode = 302;
        res.setHeader("Location", '/users');
        res.end();

        
    }

  

})

server.listen(3000);