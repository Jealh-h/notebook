# 柯里化

- 函数柯里化是把接受多个参数的函数变成接受一个单一参数的函数。

例如：
function test(a,b,c){
return a+b+c;
}
柯里化后：
test(1)(2)(3);

## 实现

```javascript
function currying(fn) {
  let args = [];
  let add = function () {
    args = args.concat(arguments);
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return add;
    }
  };
  return add;
}
```
