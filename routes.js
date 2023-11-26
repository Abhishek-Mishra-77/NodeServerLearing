
const fs = require('fs');


const requestsHandler = (res, req) => {
    const url = req.url;
    const method = req.method;

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
        const body = [];

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
}


// module.exports = requestsHandler;

// module.exports = {
//     handler: requestsHandler,
//     someText: 'Some hard coded text'
// };


module.exports.handler = requestsHandler;
module.exports.someText = 'Some randome text for demo'