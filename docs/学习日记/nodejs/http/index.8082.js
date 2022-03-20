const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello 8082');
});
server.listen(8082);