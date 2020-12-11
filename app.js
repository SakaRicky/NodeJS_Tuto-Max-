const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);
console.log("Server started");

server.listen(3000); 