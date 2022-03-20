# Asynchronous Javascript And Xml

## XMLhttpRequest构造函数

> const request = new XMLHttpRequest();

## XMLhttpRequest.onreadystatechange

> XMLHttpRequest.onreadystatechange = callback;

- 当readyState 属性变化时，调用event handler

## XMLHttpRequest.readyState

值|状态|描述
:-:|:-:|:-:
0|UNSENT|代理被创建，但还没有调用open方法
1|OPEND|open()方法被调用
2|HEADER_RECEIVED|send()方法已经被调用，并且头部和状态已经可获得
3|LOADING|下载中‘responseText属性已经包含部分数据
4|DONE|下载操作已经完成

## XMLHttpRequest.response

> XMLHttpRequest response 属性返回响应的正文。
> 返回的类型为 ArrayBuffer 、 Blob 、 Document 、 JavaScript Object 
> 或 DOMString 中的一个。 这取决于 responseType 属性。

## XMLHttpRequest.status

> status码是标准的HTTP status codes。
> 在请求完成前，status的值为0。值得注意的是，如果 XMLHttpRequest 出错，浏览器返回的 status 也为0。

## XMLHttpRequest.timeout

- 代表该请求的最大请求时间（ms）.

## XMLHttpRequest.ontimeout

- 超时会触发的函数

## XMLHttpRequest.upload => XMLHttpRequestUpload

- 代表上传进度

## XMLHttpRequest.withCredentials

> 一个布尔值 (en-US)，用来指定跨域 Access-Control 请求是否应当带有授权信息，如 cookie 或授权 header 头。

## XMLHttpRequest.abort()

> 如果请求已被发出，即立刻终止请求

## XMLHttpRequest.getAllResponseHeaders

> 获取所有响应头
<!-- 
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
-->

## XMLHttpRequest.getResponseHeader(name)

> 获取指定响应头

<!-- 使用Promise封装一个xml请求 -->
```javascript

const defaultOotion = {
  method:'get',
  timout:12000,
  withCredentials:false
}

function fetch(url,option){
  option = {defaultOption,...option}
  return new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onreadystatechange = function(){
      if(xhr.readyState===XMLHttpRequest.DONE)
        resolve(xhr.response);
    }
    xhr.send();
  })
}
```
