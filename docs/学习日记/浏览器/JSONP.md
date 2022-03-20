# JSONP

- script 标签，src 属性不受浏览器同源策略影响，可以获取服务器的脚本执行。

- jsonp 就是通过插入 script 标签实现跨域,仅适用于 get 请求

## 实现步骤

1. 创建 function
2. 插入 script 标签
3. 后台就收请求，解析 url 的参数，获取函数名称。返回方法的调用
4. 前端执行服务端返回方法的调用。

## 案例

- 前端

```javascript
function jsonp(url, param, callback) {
  let script = document.createElement("script");
  // 绑定到window
  window[callback] = function (data) {
    document.body.removeChild(script);
  };
  param = { ...param, callback };
  let arr = [];
  for (let key in param) {
    arr.push(`${key}=${param[key]}`);
  }
  script.url = `${url}?${arr.join("&")}`;
  document.body.appendChild(script);
}
function updateView(data){
    console.log(data);
}
function getData(){
    jsonp(
        url:'http://localhost:3000/get',
        param:{
            name:'jealh'
        },
        callback:updateView
    )
}
getData();
```

- 后端

```javascript
const http = require("http");
const server = http.createServer((req, resp) => {
  data = {
    name: "jealh",
    avatarUrl: "http://xxxx.com",
  };
  const url = new Url(req.url);
  if (url.path === "get") {
    resp.end(`${callback}(${JSON.stringify(data)})`);
  }
});
server.listen(3000, () => {
  console.log("server listen on 3000");
});
```
