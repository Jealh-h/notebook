(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{211:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"json-stringify的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify的坑"}},[t._v("#")]),t._v(" JSON.stringify的坑")]),t._v(" "),s("h2",{attrs:{id:"转换值如果有-tojson-方法-该方法定义什么值将被序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换值如果有-tojson-方法-该方法定义什么值将被序列化"}},[t._v("#")]),t._v(" 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '{\"name\":123}'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义toJSON方法")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toJSON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"age\":123}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中"}},[t._v("#")]),t._v(" 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中")]),t._v(" "),s("h2",{attrs:{id:"布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值"}},[t._v("#")]),t._v(" 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值")]),t._v(" "),s("p",[t._v("boolean、number、string转换成原始值")]),t._v(" "),s("h2",{attrs:{id:"undefined、任意的函数以及-symbol-值-在序列化过程中会被忽略-出现在非数组对象的属性值中时-或者被转换成-null-出现在数组中时-。函数、undefined-被单独转换时-会返回-undefined-如json-stringify-function-or-json-stringify-undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined、任意的函数以及-symbol-值-在序列化过程中会被忽略-出现在非数组对象的属性值中时-或者被转换成-null-出现在数组中时-。函数、undefined-被单独转换时-会返回-undefined-如json-stringify-function-or-json-stringify-undefined"}},[t._v("#")]),t._v(" undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined)")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略function、symbol、undefined")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"对包含循环引用的对象-对象之间相互引用-形成无限循环-执行此方法-会抛出错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对包含循环引用的对象-对象之间相互引用-形成无限循环-执行此方法-会抛出错误"}},[t._v("#")]),t._v(" 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误")]),t._v(" "),s("h2",{attrs:{id:"date-日期调用了-tojson-将其转换为了-string-字符串-同date-toisostring-因此会被当做字符串处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-日期调用了-tojson-将其转换为了-string-字符串-同date-toisostring-因此会被当做字符串处理"}},[t._v("#")]),t._v(" Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理")]),t._v(" "),s("h2",{attrs:{id:"nan-和-infinity-格式的数值及-null-都会被当做-null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nan-和-infinity-格式的数值及-null-都会被当做-null"}},[t._v("#")]),t._v(" NaN 和 Infinity 格式的数值及 null 都会被当做 null")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"a":null,"b":null}\'')]),t._v("\n")])])]),s("h2",{attrs:{id:"其他类型的对象-包括-map-set-weakmap-weakset-仅会序列化可枚举的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他类型的对象-包括-map-set-weakmap-weakset-仅会序列化可枚举的属性"}},[t._v("#")]),t._v(" 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性")])])}),[],!1,null,null,null);s.default=r.exports}}]);