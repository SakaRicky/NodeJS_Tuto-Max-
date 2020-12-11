const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Send a message</title></head>');
        res.write('<body>');
        res.write('<h1>Please enter your message and click send</h1>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"></input><button>Send</button></form>');
        res.write('</body>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        let parsedData = '';
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            parsedData = Buffer.concat(body).toString();
            let message = parsedData.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body>');
    res.write('<h1>This is my first Node Page</h1>');
    res.write('<p>Finally my first Node page YOUPI</p>');
    res.write('</body>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';
