# cookie

可参考原文[HTTP cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)

- 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再次发起请求时被携带并发送到服务器上。通常用来使无状态的http协议记录稳定的状态信息成为了可能。

## 用途

1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2. 个性化设置（用户自定义设置、主题）
3. 浏览器行为跟踪（如跟踪分析用户行为等）

## 创建Cookie

- 服务端响应设置set-cookie响应头部

## cookie生命周期

- 会话cookie:浏览器关闭后会被自动删除，会话cookie不需要指定过期事件Expire或者有效期max-age.需要注意的是、有些浏览器提供了会话恢复功能，即使关闭浏览器，会话cookie也会保留下来。
- 持久cookie:取决于Expires（Date）或者有效期Max-Age（ Number）指定的时间

例如：

> Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;

## 几个重要的属性

- cookie作用域

1. Domain: 指定哪些主机可以接收Cookie.如果不指定，默认为origin,**不包含子域名**。如果指定了Domain,则一般包含子域名。
例如：
Domain=mozilla.org,则developer.mozilla.org也包含此cookie

2. Path: 标识主机下的哪些路径可以接收cookie,以"/"(%x2F)作为路径分隔符，子路径会被匹配。
例如：
Path=/docs,则以下都会被匹配
    - /docs
    - /docs/web/
    - /docs/web/http

3. SameSite: Cookie要求某个cookie在跨站请求时不会被发送。
SameSite有下面三个值：
    - None 同站、跨站都发送。
    - Strict 同站发送
    - Lax(默认值),用户从外部站点导航至URL时除外为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到URL时才会发送。如 link 链接

lax细说：
导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。

请求类型|示例|正常情况|Lax
:-:|:-:|:-:|:-:
链接 |<a href="..."></a>| 发送 Cookie| 发送 Cookie
预加载| <link rel="prerender"/>| 发送 Cookie| 发送 Cookie
GET |表单 <form method="GET">| 发送 Cookie| 发送 Cookie
POST |表单 <form method="POST">| 发送 Cookie| 不发送
iframe| <iframe></iframe>| 发送 Cookie| 不发送
AJAX |$.get("...") |发送 Cookie| 不发送
Image| <img/>| 发送 Cookie| 不发送

该请求必须是顶级导航.您可以将其视为等同于网址栏中显示的网址更改(例如，用户单击链接以转到另一个站点.
请求方法必须是安全的(例如GET或HEAD，但不能是POST)
可以观看下面的视频，理解会更加详细：
[https://www.bilibili.com/video/BV19y4y1j7Yx?spm_id_from=333.337.search-card.all.click](https://www.bilibili.com/video/BV19y4y1j7Yx?spm_id_from=333.337.search-card.all.click)

- 安全

1. http-only:标识是否可以使用javascript(document.cookie)获取cookie
2. secure: 标识是否只通过https传递cookie
