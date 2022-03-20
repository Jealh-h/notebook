const http = require('http');
// const url = require('url');
// const myURL =
//     url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// const newUrl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// console.log(myURL, newUrl);

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http:${request.headers.host}`);
    let res = url.searchParams.values().next().value;
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.end(encodeURIComponent(res))
});
server.listen(3000, () => {
    console.log("server listen on 3000");
})