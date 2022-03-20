const http = require('http');
const { fork } = require('child_process');
const URL = require('url');
const childProcess = fork('./child_process.js');
const server = http.createServer(function (req, res) {
    let url = new URL.parse(req.url);
    // req.on('data', function () {

    // })
    if (url.pathname == '/test') {
        childProcess.send('hello');
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end('hello');
});

server.listen(3005, function () {
    console.log('server on port 3005');
})