# new 关键字的操作

- 创建一个新对象
- 为新对象添加 **\_\_proto\_\_**,将该属性连接构造函数的 **\_\_prototype\_\_**
- 将 this 绑定到新对象
- 若构造函数没有返回对象，则返回 this

## 实现

```javascript
function myNew(constr) {
  // arguments是 类数组对象
  // 可以判断一下constr是不是函数，以及generator函数
  let target = {};
  let args = Array.from(arguments).slice(1);
  target.__proto__ = constr.prototype;
  let ins = constr.apply(target, args);
  // 要返回 Object 类型才行，基础类型不行
  return typeof ins === "object" ? ins : target;
}
```

## 使用 Object.create

```ts
function myNew(cntr, ...args) {
  let obj = Object.create(entr.prototype);
  let ins = cntr.apply(obj, args);
  return typeof ins === "object" ? ins : obj;
}
```
