const http = require('http');
const parse = require('qs').parse;
const formBody = require('body/form');

// http.createServer(function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Method', '*');
//     let body = [];
//     req.on('data', (chunk) => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString();
//         console.log(req.headers);
//         res.end(JSON.stringify(body));
//     })
//     // formBody(req, res, function (err, body) {
//     //     // err probably means invalid HTTP protocol or some shiz.
//     //     if (err) {
//     //         console.log(err);
//     //         res.statusCode = 500
//     //         return res.end("NO U")
//     //     }
//     //     // I am an echo server
//     //     res.setHeader("content-type", "application/json")
//     //     res.end(JSON.stringify(body))
//     // })
// }).listen(3005)
const express = require('express');

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('*', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', '*');
    next();
})
app.use('/upload', (req, res) => {
    console.log(req.body);
    res.send(req.hostname);
})
app.use('/bad', (req, res) => {
    console.log(req.baseUrl);
    res.writeHead(400)
    res.write(JSON.stringify('url'));
    res.end()
})
app.listen(3005);

