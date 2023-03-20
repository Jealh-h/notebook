# instanceOf

判断某一个实例对象是否是某一构造函数的实例

> 原生

```ts
var array = new Array();

console.log(array instanceof Array); // true
```

> 手写

- 先获取实例的原型链 `__proto__` 指向构造函数的原型链
- 判断是否相等 `class.prototype`

```ts
function myInstanceof(ins, c) {
  let proto = ins.__proto;
  // Object.getPrototypeOf(ins)
  while (proto) {
    if (proto === c.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}
```
