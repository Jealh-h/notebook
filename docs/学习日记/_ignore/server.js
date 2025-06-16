const http = require('http');

const server = http.createServer((request) => {
    request.on('data', (d) => {
        console.log(d.toString('utf-8'))
    })
})

server.listen('3001', () => {
    console.log('server start on 3001')
})