(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{250:function(t,a,s){"use strict";s.r(a);var v=s(6),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"执行上下文与作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文与作用域"}},[t._v("#")]),t._v(" 执行上下文与作用域")]),t._v(" "),a("ul",[a("li",[t._v("概念：当前 JS 代码所在环境的首相概念，在运行代码时，会处在一个执行上下文中")])]),t._v(" "),a("h2",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("h3",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文")]),t._v(" "),a("li",[t._v("函数执行上下文")])]),t._v(" "),a("h3",{attrs:{id:"执行上下文创建步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文创建步骤"}},[t._v("#")]),t._v(" 执行上下文创建步骤")]),t._v(" "),a("ol",[a("li",[t._v("创建变量对象：初始化函数 arguments,提升函数声明、变量声明")]),t._v(" "),a("li",[t._v("创建作用域链：作用域链是在变量对象之后创建的")]),t._v(" "),a("li",[t._v("确定 this 的值")])]),t._v(" "),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("p",[t._v("作用域负责收集和维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。—— 摘录自《你不知道的 JavaScript》(上卷)")]),t._v(" "),a("p",[t._v("作用域有两种工作模型：词法作用域和动态作用域，JS 采用的是词法作用域工作模型，词法作用域意味着作用域是由书写代码时变量和函数声明的位置决定的。(with 和 eval 能够修改词法作用域，但是不推荐使用，对此不做特别说明)")]),t._v(" "),a("h3",{attrs:{id:"作用域分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域分类"}},[t._v("#")]),t._v(" 作用域分类")]),t._v(" "),a("ul",[a("li",[t._v("全局作用域")]),t._v(" "),a("li",[t._v("函数作用域")]),t._v(" "),a("li",[t._v("块级作用域")])]),t._v(" "),a("h2",{attrs:{id:"js-执行上下文栈-执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-执行上下文栈-执行栈"}},[t._v("#")]),t._v(" js 执行上下文栈（执行栈）")]),t._v(" "),a("p",[t._v("执行栈，也叫做调用栈，具有 "),a("strong",[t._v("LIFO (后进先出)")]),t._v(" 结构，用于存储在代码执行期间创建的所有执行上下文。")]),t._v(" "),a("ul",[a("li",[t._v("首次运行 JavaScript 代码的时候,会创建一个全局执行的上下文并 Push 到当前的执行栈中，每当发生函数调用，引擎都会为该函数创建一个新的函数执行上下文并 Push 当前执行栈的栈顶。")]),t._v(" "),a("li",[t._v("当栈顶的函数运行完成后，其对应的函数执行上下文将会从执行栈中 Pop 出，上下文的控制权将移动到当前执行栈的下一个执行上下文。")])]),t._v(" "),a("h2",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("p",[t._v("从当前作用域（函数，块级）,一直到全局作用域")])])}),[],!1,null,null,null);a.default=_.exports}}]);