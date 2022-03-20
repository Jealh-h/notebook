# this 判断

keyword:谁调用它，this 就指向谁

1. new 绑定

- 如果构造函数**没有返回**一个新对象

```javascript
function Obj() {
  this.age = 18;
}
let instance = new Obj();
console.log(instance.age); // 18
```

- 如果构造函数**返回**了一个对象

```javascript
function Obj() {
  this.age = 18;
  return { age: 15 };
}
let instance = new Obj();
console.log(instance.age); // 15
```

2. call、apply、bind 绑定

```javascript
function say() {
  console.log(this.greet);
}
var greet = "window";

var Hue = {
  greet: "Hue",
};
say.call(Hue); // Hue
say.apply(Hue); // Hue
say.bind(Hue)(); // Hue
say(); // window

// 传入null或undefined
say.call(null); // 严格模式下报错，非严格模式应用默认绑定
```

3. 隐式绑定

- 函数调用是在某个对象上
- 例：xxx.fn()

```javascript
function say() {
  console.log(this.name);
}

var person = {
  name: "jealh",
  say,
};
var name = "window";
person.say(); // jealh
```

4. 默认绑定

- 不能使用其他绑定规则时使用，如直接的函数调用
- 非严格模式： node 环境，执行全局对象 global，浏览器环境，执行全局对象 window。
- 严格模式：执行 undefined

```javascript
function say() {
  console.log(this.name);
}
var name = "window";
say(); // window
```

5. 箭头函数

- 箭头函数的 this 是外层上下文绑定的 this

```javascript
let obj = {
  name: "obj",
  fn: () => {
    console.log(this.name);
  },
};
var name = "globalThis";
obj.fn(); // globalThis
```
