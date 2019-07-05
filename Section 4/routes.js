const fs = require('fs');


const requestHandler = (req, res) => {
    
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter body</title></head>');
        res.write('<body><form action="/message" method="POST"><input type"text" name="message"><button type="submit">Send</button></form></bofy>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
            console.log(data);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>Hello from my Node.js server!</bofy>');
    res.write('</html>');
    res.end();
};

// module. exports(requestHandler);

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text'

exports.handler = requestHandler;
exports.someText = 'Some hard coded text'