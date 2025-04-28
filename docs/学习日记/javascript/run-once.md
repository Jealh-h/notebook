## 只执行一次的函数

### 实现

```js
function once(fun) {
  let called = false;
  return function _once(...params) {
    if (called) {
      return _once.value;
    }
    called = true;
    return (_once.value = fun.apply(this, params));
  };
}
```
