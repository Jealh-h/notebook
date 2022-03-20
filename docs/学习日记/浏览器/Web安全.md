# Web 安全

## XSS（cross-Site-Scripting）

- 跨站脚本攻击，是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登录网站时就可能执行恶意代码，这些恶意代码可以读取 cookie,seeion tokens,或者其他敏感信息。对用户进行钓鱼攻击。

- 本质上是因为恶意代码没有经历过滤，与网站正常的代码混在一起，浏览器无法辨析代码的可信度。恶意代码通过获取用户信息，假冒用户操作。

### XSS 分类

1. 反射型 XSS

   - 攻击步骤：

   1. 构造特殊的 url,其中含有恶意代码
   2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 url 中取出，拼接在 HTML 中返回给浏览器
   3. 用户浏览器接受到响应后解析执行，恶意代码也跟着被执行
   4. 用恶意代码窃取用户数据，并发送到攻击者网站，或冒充用户行为，调用网站接口

   - 预防

   1. 纯前端渲染，避免使用 innerHTML,outerHTML,document.write.使用 ajax，将代码与数据分隔开。明确告诉浏览器我们要使用的是.innerText,.textContent,.setAttribute,还是.style
   2. 注意一些内联属性,内联事件监听的漏洞，如 onload 事件，href=javascript:xxxx
   3. html 字符串转义

2. DOM 型 xss

   前端 js 将不可信的内容插入到页面中，.innerHTML,.outerHTML,.appendChild,document.write 时特别注意

   - 预防
   - 对输入类容进行转义

   1. 对于 url 内容，使用 encodeURLComponent 来转义
   2. 非 url

      ```javascript
      function encodeHtml(str) {
        return str
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      ```

3. 存储型

   恶意脚本存储在服务器上，脚本从服务器传回并执行。
   原因：前端提交数据到服务器时没有做好过滤，服务端在存入数据库时也没有过滤。

   - 预防

   1. 前端发送数据前，先转义过滤了
   2. 服务端在存入数据库之前进行过滤
   3. 前端接收服务端数据时进行过滤

### XSS 其他防御手段

- Content Security Policy (CSP)

使用 http 的 Content-Security-Policy 头部指定策略,或者前端使用 meta 标签

```javascript
Content-Security-Policy: default-src 'self'
<meta http-equiv="Content-Security-Policy" content="form-action 'self';">
```

- 输入长度控制
- 输入内容限制
- 设置 cookie 的 http-only 防止脚本读取 cookie
- 危险操作设置验证码

### xss 检测

- 检测 html 标签属性，href,onload 等内联属性
- 安全工具
  [Mozilla HTTP Observatory](https://github.com/mozilla/http-observatory/)
  Mozilla HTTP Observatory，是 Mozilla 最近发布的一款名为 Observatory 的网站安全分析工具，意在鼓励开发者和系统管理员增强自己网站的安全配置。用法非常简单：输入网站 URL，即可访问并分析网站 HTTP 标头，随后可针对网站安全性提供数字形式的分数和字母代表的安全级别。
  检查的主要范围包括：

  - Cookie
  - 跨源资源共享（CORS）
  - 内容安全策略（CSP）
  - HTTP 公钥固定（Public Key Pinning）
  - HTTP 严格安全传输（HSTS）状态
  - 是否存在 HTTP 到 HTTPs 的自动重定向
  - 子资源完整性（Subresource Integrity）
  - X-Frame-Options
  - X-XSS-Protection

  [arachni](https://github.com/Arachni/arachni)
  Arachni 是基于 Ruby 的开源，功能全面，高性能的漏洞扫描框架，Arachni 提供简单快捷的扫描方式，只需要输入目标网站的网址即可开始扫描。它可以通过分析在扫描过程中获得的信息，来评估漏洞识别的准确性和避免误判。

Arachni 默认集成大量的检测工具，可以实施 代码注入、CSRF、文件包含检测、SQL 注入、命令行注入、路径遍历等各种攻击。

同时，它还提供了各种插件，可以实现表单爆破、HTTP 爆破、防火墙探测等功能。

针对大型网站，该工具支持会话保持、浏览器集群、快照等功能，帮助用户更好实施渗透测试。

## CSRF (Cross-site request forgery)

跨站伪造请求：攻击者诱导受害者进入第三方网站。利用用户对浏览器的信任，攻击者模拟用户操作在用户认证过的网站上做一些操作，如发消息，转账等。

> 典型攻击流程

1. 用户登录网站，获取登录凭证
2. 攻击者诱导用户访问钓鱼网站
3. 钓鱼网站向登录网站发送请求，浏览器会默认携带站点 A 的 Cookie 信息。
4. 登录网站收到请求后，对请求进行验证，并确认受害者的凭证。
5. 登录网站以攻击者的请求执行钓鱼网站的请求

> 攻击手段

攻击者自己的服务器运行 server_fish
用户登录网站的服务器 server

用户点击一个连接，进入钓鱼网站 http://server_fish.com.
钓鱼网站发起连接，进行 csrf 攻击，因为请求 http://server.com/transfer?account=1000&payee='hacker'。
请求 server 时，浏览器会携带登录的 cookie，进而让服务端认为是用户在操作。从而实现钓鱼。
同时，form 表单提交没有跨域限制。

- 防范

1. 危险操作时需要用户实际操作，如指纹、人脸、密保问题验证等
2. Referer 判断请求来源，Forbidden header
3. token 利用 localStorage
