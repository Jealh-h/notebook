(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{255:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重排重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排重绘"}},[t._v("#")]),t._v(" 重排重绘")]),t._v(" "),a("p",[t._v("原文参考："),a("a",{attrs:{href:"https://juejin.cn/post/6844903745914929165",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903745914929165"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("重排：某些元素的外观被改变，如元素的填充颜色")]),t._v(" "),a("li",[t._v("重绘：某些生成布局，重新排列元素")])]),t._v(" "),a("h2",{attrs:{id:"常见引起重排的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见引起重排的属性"}},[t._v("#")]),t._v(" 常见引起重排的属性")]),t._v(" "),a("ol",[a("li",[t._v("添加或者删除DOM元素")]),t._v(" "),a("li",[t._v("元素尺寸改变，边距、填充、边框、宽高")]),t._v(" "),a("li",[t._v("input中输入文字")]),t._v(" "),a("li",[t._v("resize事件发生")]),t._v(" "),a("li",[t._v("offsetWidth和offsetHeight")]),t._v(" "),a("li",[t._v("计算style属性的值")])]),t._v(" "),a("blockquote",[a("p",[t._v("常见引起重排的属性")])]),t._v(" "),a("ul",[a("li",[t._v("width、height、margin、padding")]),t._v(" "),a("li",[t._v("display、border、position、overflow")]),t._v(" "),a("li",[t._v("clientWidth、clientHeight、clientTop、clientLeft")]),t._v(" "),a("li",[t._v("offsetWidth/Height/Left/Right")]),t._v(" "),a("li",[t._v("scrollWidth/Height/Left/Right")]),t._v(" "),a("li",[t._v("scrollIntoView()、scrollTo()、getComputedStyle()")]),t._v(" "),a("li",[t._v("getBoundingClientRect()、scrollIntoViewIfNeeded()")])]),t._v(" "),a("h2",{attrs:{id:"重排影响范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排影响范围"}},[t._v("#")]),t._v(" 重排影响范围")]),t._v(" "),a("ul",[a("li",[t._v("全局范围：从根节点html开始对整个渲染树重新布局")]),t._v(" "),a("li",[t._v("局部范围：对渲染树的某个部分或某一个渲染对象进行重新布局")])]),t._v(" "),a("h2",{attrs:{id:"重绘属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘属性"}},[t._v("#")]),t._v(" 重绘属性")]),t._v(" "),a("ul",[a("li",[t._v("color、border-style、visibility、background")]),t._v(" "),a("li",[t._v("text-decoration、background-image、background-position、background-repeat")]),t._v(" "),a("li",[t._v("outline-color、outline、outline-style、border-radius")]),t._v(" "),a("li",[t._v("outline-width、box-shadow、background-size")])]),t._v(" "),a("h2",{attrs:{id:"渲染队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染队列"}},[t._v("#")]),t._v(" 渲染队列")]),t._v(" "),a("blockquote",[a("p",[t._v("修改了元素的几何属性，导致浏览器触发重排或重绘时。它会把该操作放进渲染队列，等到队列中的操作到了一定的数量或者到了一定的时间间隔时，浏览器就会批量执行这些操作.")])]),t._v(" "),a("h2",{attrs:{id:"强制刷新渲染队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制刷新渲染队列"}},[t._v("#")]),t._v(" 强制刷新渲染队列")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("这段代码会触发4次重排+重绘，因为在console中你请求的这几个样式信息，无论何时浏览器都会立即执行渲染队列的任务，即使该值与你操作中修改的值没关联。")])]),t._v(" "),a("p",[t._v("强制刷新队列的style样式请求：\noffsetTop, offsetLeft, offsetWidth, offsetHeight\nscrollTop, scrollLeft, scrollWidth, scrollHeight\nclientTop, clientLeft, clientWidth, clientHeight\ngetComputedStyle(), 或者 IE的 currentStyle")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("这次只触发了一次重排：在第一个console的时候，浏览器把之前上面四个写操作的渲染队列都给清空了。剩下的console，因为渲染队列本来就是空的，所以并没有触发重排，仅仅拿值而已。")])]),t._v(" "),a("h2",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("ol",[a("li",[t._v("分离读写")]),t._v(" "),a("li",[t._v("样式集中改变")]),t._v(" "),a("li",[t._v("createDocumentFragment")]),t._v(" "),a("li",[t._v("脱离文档流")]),t._v(" "),a("li",[t._v("GPU加速：Canvas2D、css3-transitions、css3-transform、WebGL")])])])}),[],!1,null,null,null);s.default=e.exports}}]);