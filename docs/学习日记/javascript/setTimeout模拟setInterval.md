## 使用 setTimeout 模拟 setInterval

```ts
function setTimeoutMockSetInterval(callback, interval) {
  function runTimeout() {
    setTimeout(() => {
      callback();
      runTimeout();
    }, interval);
  }
  runTimeout();
}
```
