# call apply bind

- 用于 this 的改变
- call、apply 都会执行函数，区别于传参不同

## call

```javascript
Function.prototype.call = function () {
  let [thisArg, ...args] = arguments;
  if (!thisArg) {
    // this参数为null
    // 绑定到全局，但严格模式不一样
    thisArg = typeof window === "undefined" ? global : window;
  }
  // 核心点，隐式绑定，谁掉用，this 指向谁
  thisArg.func = this; // 这里this是这个函数
  let result = thisArg.func(...args);
  delete thisArg.func;
  return result;
};
```

## apply

```javascript
Function.prototype.apply = function (thisArg, arrayArg) {
  if (!thisArg) {
    thisArg = window ?? global;
  }
  thisArg.func = this;
  let result;
  if (!arrayArg) {
    result = thisArg.func();
  } else {
    result = thisArg.func(...arrayArg);
  }
  delete thisArg.func;
  return result;
};
```

## bind

```javascript
Function.prototype.bind = function (thisArg, ...res) {
  if (!thisArg) {
    thisArg = window ?? global;
  }
  let that = this;
  return function () {
    return that.apply(thisArg, [...arguments, ...res]);
  };
};
```
