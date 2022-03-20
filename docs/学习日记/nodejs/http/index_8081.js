const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello 8081');
});
server.listen(8081);