(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{312:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" nginx")]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("ul",[t("li",[s._v("启动：nginx")]),s._v(" "),t("li",[s._v("停止：nginx -s stop")]),s._v(" "),t("li",[s._v("重新加载配置文件：nginx -s reload")]),s._v(" "),t("li",[s._v("退出：nginx -s quit")]),s._v(" "),t("li",[s._v("查看进程：ps ax|grep nginx")])]),s._v(" "),t("h3",{attrs:{id:"命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令参数"}},[s._v("#")]),s._v(" 命令参数")]),s._v(" "),t("ul",[t("li",[s._v("-?| -h - 打印命令行参数的帮助。")]),s._v(" "),t("li",[s._v("-c file- 使用替代配置 file 而不是默认文件。")]),s._v(" "),t("li",[s._v("-g directives- 设置全局配置指令，例如，nginx -g“pid /var/run/nginx.pid; worker_processes sysctl -n hw.ncpu;”")]),s._v(" "),t("li",[s._v("-p prefix- 设置 nginx 路径前缀，即保留服务器文件的目录（默认值是/usr/local/nginx）。")]),s._v(" "),t("li",[s._v("-q - 在配置测试期间抑制非错误消息。")]),s._v(" "),t("li",[s._v("-s signal- 向主进程发送一个信号。参数信号可以是以下之一：\n"),t("ul",[t("li",[s._v("stop - 快速关闭")]),s._v(" "),t("li",[s._v("quit - 较慢地关闭")]),s._v(" "),t("li",[s._v("reload - 重新加载配置，使用新配置启动新的工作进程，正常关闭旧的工作进程。")]),s._v(" "),t("li",[s._v("reopen - 重新打开日志文件")])])]),s._v(" "),t("li",[s._v("-t - 测试配置文件：nginx 检查配置的正确语法，然后尝试打开配置中引用的文件。")]),s._v(" "),t("li",[s._v("-T- 与-t 相同，但另外将配置文件转储到标准输出（1.9.2）。")]),s._v(" "),t("li",[s._v("-v - 打印 nginx 版本。")]),s._v(" "),t("li",[s._v("-V - 打印 nginx 版本，编译器版本和配置参数。")])]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("h3",{attrs:{id:"三个范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个范围"}},[s._v("#")]),s._v(" 三个范围")]),s._v(" "),t("ul",[t("li",[s._v("全局: nginx 用户组、进程、日志")]),s._v(" "),t("li",[s._v("http: nginx 服务器与客户端的请求、代理、缓存等")]),s._v(" "),t("li",[s._v("event: 影响连接的配置，如：最大连接数")])]),s._v(" "),t("h3",{attrs:{id:"提供静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提供静态资源"}},[s._v("#")]),s._v(" 提供静态资源")]),s._v(" "),t("p",[s._v("监听 80 端口的请求并且 domain 为 server_name。")]),s._v(" "),t("p",[s._v("root 指定用于搜索文件的更目录。如当访问 /test.png 时，会在服务器的 /www/data 下寻找 test/png。\n对于 /images/test.png，会在服务器的 /www/data/images/ 下寻找")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name domain.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  root /www/data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  location /images/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("使用 sendfile 优化。避免了用户和内核之间的数据拷贝,所以效率很高,也被称之为零拷贝。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("启用或禁用在 FreeBSD 和 Linux 上使用异步文件 I / O（AIO")])]),s._v(" "),t("li",[t("p",[s._v("启用或禁用 TCP_NOPUSHFreeBSD 上的 TCP_CORK 套接字选项或 Linux 上的套接字选项。该选项仅在使用 sendfile 时启用。启用该选项允许")]),s._v(" "),t("ul",[t("li",[s._v("在 Linux 和 FreeBSD 4 上发送一个数据包中的响应头文件和开始文件。*;")]),s._v(" "),t("li",[s._v("以完整的数据包发送文件。")])])])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("location /video/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sendfile       on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    tcp_nopush     on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    aio            on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjAzNTQ1Mw==&mid=2247485228&idx=1&sn=c6a5039341c400666e1b50ff8f9661c2&chksm=fc6ee8becb1961a83181fb113e396f0ea3d0b7810e886cd3eb3b2733fa21dad3c55b7121d201&scene=27",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 篇 06——Sendfile 指令及其原理"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),t("p",[s._v("下面将 / 访问代理到 localhost:3000 上")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://localhost:3000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  location ~ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root /data/images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置-https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-https"}},[s._v("#")]),s._v(" 配置 https")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name         www.example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_certificate     www.example.com.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_certificate_key www.example.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_protocols       TLSv1 TLSv1.1 TLSv1.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_ciphers         HIGH:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("HTTPS 服务器优化\nSSL 操作会消耗额外的 CPU 资源。在多处理器系统上，应该运行多个工作进程，不少于可用 CPU 核心的数量。最占用 CPU 的操作是 SSL 握手。有两种方法可以最大限度地减少每个客户端的这些操作的数量：第一种方法是启用 Keepalive 连接以通过一个连接发送多个请求，第二种方法是重新使用 SSL 会话参数以避免 SSL 握手进行并行连接和后续连接。会话存储在工作人员共享的 SSL 会话缓存中，并由 ssl_session_cache 指令进行配置。一兆字节的缓存包含约 4000 个会话。默认缓存超时时间为 5 分钟。它可以通过使用 ssl_session_timeout 指令来增加。")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("worker_processes auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ssl_session_cache   shared:SSL:10m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_session_timeout 10m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      listen              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      server_name         www.example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      keepalive_timeout   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n      ssl_certificate     www.example.com.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      ssl_certificate_key www.example.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      ssl_protocols       TLSv1 TLSv1.1 TLSv1.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      ssl_ciphers         HIGH:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("SSL 证书链\n某些浏览器可能会抱怨由知名证书颁发机构签署的证书，而其他浏览器可能会接受证书而没有问题。发生这种情况的原因是，颁发机构使用中间证书对服务器证书进行了签名，该中间证书不在与特定浏览器一起分发的众所周知的受信任证书颁发机构的证书库中。在这种情况下，权威机构提供一系列链接的证书，这些证书应连接到已签署的服务器证书。服务器证书必须出现在组合文件中的链接证书之前")]),s._v(" "),t("li",[s._v("一个 HTTP / HTTPS 服务器\n可以配置同时处理 HTTP 和 HTTPS 请求的单个服务器：")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  listen              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name         www.example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_certificate     www.example.com.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_certificate_key www.example.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("基于名称的 HTTPS 服务器\n在配置监听单个 IP 地址的两个或多个 HTTPS 服务器时出现常见问题：server_name")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server_name     www.example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   ssl_certificate www.example.com.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server_name     www.example.org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   ssl_certificate www.example.org.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("使用此配置，浏览器会接收默认服务器的证书，即www.example.com，而不管所请求的服务器名称如何。 这是由 SSL 协议行为造成的。 SSL 连接在浏览器发送 HTTP 请求之前建立，而 nginx 不知道请求的服务器的名称。 因此，它可能只提供默认服务器的证书。\n解决该问题的最老且最稳健的方法是为每个 HTTPS 服务器分配一个单独的 IP 地址：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1:443 ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name     www.example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate www.example.com.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2:443 ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name     www.example.org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate www.example.org.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("具有多个名称的 SSL 证书")]),s._v(" "),t("li",[s._v("服务器名称指示")]),s._v(" "),t("li",[s._v("兼容性")])]),s._v(" "),t("h3",{attrs:{id:"gzip-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gzip-压缩"}},[s._v("#")]),s._v(" gzip 压缩")]),s._v(" "),t("ul",[t("li",[s._v("gzip on/off; 打开关闭压缩")]),s._v(" "),t("li",[s._v("gzip_types *; mime type")]),s._v(" "),t("li",[s._v("gzip_comp_level 1-9; 压缩层度")]),s._v(" "),t("li",[s._v("gzip_min_length *; 表示文件多大才进行压缩")]),s._v(" "),t("li",[s._v("gzip_vary on; 在 header 中添加压缩标识")]),s._v(" "),t("li",[s._v('gzip_disable "MSIE [1-6].;"; 对不支持 gzip 的浏览器不开启该功能。使用 user-agent 判断')]),s._v(" "),t("li",[s._v("gzip_proxied off; nginx 作为反向代理服务器才启用")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  gzip_proxied expired no-cache no-store private auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("使用“ .gz”文件扩展名而不是普通文件发送预压缩文件。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" static on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"try-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#try-files"}},[s._v("#")]),s._v(" try_files")]),s._v(" "),t("p",[s._v("以指定的顺序检查文件的存在，并使用第一个找到的文件进行请求处理; 该处理在当前上下文中执行。 文件路径是根据根和别名指令从文件参数构建的。 可以通过在名称末尾指定斜线来检查目录的存在，例如，“$ URI/”。 如果找不到任何文件，则将内部重定向到最后一个参数中指定的 uri。 例如：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("location /images/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    try_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" /images/default.gif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);