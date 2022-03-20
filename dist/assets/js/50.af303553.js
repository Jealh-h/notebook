(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{233:function(t,v,_){"use strict";_.r(v);var a=_(6),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcp与udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp"}},[t._v("#")]),t._v(" TCP与UDP")]),t._v(" "),_("h2",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),_("ul",[_("li",[t._v("Transmission Control Protocol 传输控制协议。")])]),t._v(" "),_("p",[t._v("!> 面向连接的的协议，在收发数据之前必须先要建立三次对话。")]),t._v(" "),_("h3",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("面向字节流、面向连接、传输可靠")])]),t._v(" "),_("blockquote",[_("p",[t._v("保证可靠传输的方式")])]),t._v(" "),_("ul",[_("li",[t._v("校验和")]),t._v(" "),_("li",[t._v("序列号")]),t._v(" "),_("li",[t._v("确认应答")]),t._v(" "),_("li",[t._v("超时重传")]),t._v(" "),_("li",[t._v("连接管理")]),t._v(" "),_("li",[t._v("流量控制")]),t._v(" "),_("li",[t._v("拥塞控制")])]),t._v(" "),_("h4",{attrs:{id:"校验和"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#校验和"}},[t._v("#")]),t._v(" 校验和")]),t._v(" "),_("p",[t._v("在数据传输的过程中，将发送的数据段都当做一个16位的整数。将这些整数加起来。并且前面的进位不能丢弃，补在后面，最后取反，得到校验和。")]),t._v(" "),_("h4",{attrs:{id:"确认应答与序列号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确认应答与序列号"}},[t._v("#")]),t._v(" 确认应答与序列号")]),t._v(" "),_("p",[_("strong",[t._v("序列号")]),t._v("：TCP传输时将每个字节的数据都进行了编号，这就是序列号。\n"),_("strong",[t._v("确认应答")]),t._v("：每次接受方收到数据后，都会对传输方进行确认应答。确认应答是上一次的序列号"),_("strong",[t._v("加一")])]),t._v(" "),_("h4",{attrs:{id:"超时重传"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#超时重传"}},[t._v("#")]),t._v(" 超时重传")]),t._v(" "),_("p",[t._v("因为确认应答机制，收发数据需要确认。\n所有在没有收到确认时，会有一个等待时间，如果超时，那么就会重传，不论是丢包还是忘记返回确认号。")]),t._v(" "),_("h4",{attrs:{id:"流量控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),_("p",[t._v("收发数据不能太快，因为接收方会有一个接收缓冲区，如果缓冲区满了，就会导致堵塞。\n通过"),_("strong",[t._v("滑动窗口")]),t._v("进行流量控制。")]),t._v(" "),_("h5",{attrs:{id:"滑动窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),_("ul",[_("li",[t._v("在TCP协议报头信息中，有一个16位字段的窗口大小，(2^16),代表接受方的缓冲区大小，这个是数字越大，代表接受方能接收更多数据，\n网络吞吐率就越大。")]),t._v(" "),_("li",[t._v("接收方在发送确认应答时，会发送自己的（即时）的窗口大小，那么发送方就能更据这个数值来改变自己的发送速度。同时发送端也会定时向\n接收端发送窗口探测数据端，从而获取窗口大小。")]),t._v(" "),_("li",[t._v("只有在收到滑动窗口的前n个连续的回复，即滑动的距离不能中断，才让窗口后移动。\n例：\nsegment 分段如下：\n|1 2 3 4| 5 6 7 8 9\n当前窗口为 1-4\n收到 2 3 的响应，此时不会滑动\n收到1的响应，滑动\n1 2 3 |4 5 6 7| 8 9")])]),t._v(" "),_("h4",{attrs:{id:"拥塞控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[t._v("#")]),t._v(" 拥塞控制")]),t._v(" "),_("p",[t._v("步骤：")]),t._v(" "),_("ul",[_("li",[t._v("慢开始")]),t._v(" "),_("li",[t._v("拥塞控制")]),t._v(" "),_("li",[t._v("快重传")]),t._v(" "),_("li",[t._v("快恢复")])]),t._v(" "),_("p",[_("strong",[t._v("ssthresh")]),t._v(":阈值。具体的看图")]),t._v(" "),_("blockquote",[_("p",[t._v("看下面的经典图：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/gitme-H/images-bed/raw/master/img/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.png",alt:"拥塞控制"}})]),t._v(" "),_("h3",{attrs:{id:"为什么三次握手-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么三次握手-四次挥手"}},[t._v("#")]),t._v(" 为什么三次握手，四次挥手")]),t._v(" "),_("blockquote",[_("p",[t._v('因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端'),_("strong",[t._v("所有的报文都发送完")]),t._v("了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。")])]),t._v(" "),_("h3",{attrs:{id:"三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),_("p",[t._v("第一次： client ----------\x3e server\n"),_("strong",[t._v("客户端")]),t._v("发送 SYN = 1 同步号，seq = x 序列号")]),t._v(" "),_("p",[t._v("第二次： client <---------- server\n"),_("strong",[t._v("服务端")]),t._v("发送 ack = x+1, SYN = 1同步 SEQ = y")]),t._v(" "),_("p",[t._v("第三次： client ----------\x3e server\n"),_("strong",[t._v("客户端")]),t._v("发送 SYN=0,ACK=1, ack = y+1, seq = x + 1")]),t._v(" "),_("h3",{attrs:{id:"四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),_("p",[t._v("第一次：主动方 -----------\x3e 被动方\nFIN = 1,seq=X\n主动方发送FIN+ACK报文，并发送序列号为X")]),t._v(" "),_("p",[t._v("第二次：主动方 <----------- 被动方\nack = X+1 SEQ = x+!\n被动方发送ACK报文，并置发送号为X+1")]),t._v(" "),_("p",[t._v("第三次：主动方 <----------- 被动方\nFIN = 1, ACK = 1, SEQ = Y,ack=x+!\n被动方发送FIN+ACK报文，并置发送序号为Y，在确认号为X")]),t._v(" "),_("p",[t._v("第四次：主动方 ------------\x3e 被动方\nACK=1,ack=Y+!,SEQ = X+!\n主动方发送ACK报文，并置发送号为X，在确认号为Y")]),t._v(" "),_("p",[t._v("MSL(Maximum Segment Lifetime)\n最大报文生存时间")])])}),[],!1,null,null,null);v.default=r.exports}}]);