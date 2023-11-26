const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];

    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf-8' }, (error, data) => {
            if (error) {
                console.log(error);
                res.end();
            } else {
                console.log(data);
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
                res.write(`<p>${data}</p>`)
                res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
                res.write('</body>');
                res.write('</html>');
                return res.end();
            }
        });
    }
    else if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

server.listen(3000);
