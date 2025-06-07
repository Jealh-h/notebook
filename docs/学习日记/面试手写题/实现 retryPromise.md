## 题目描述

实现一个 retryPromise 函数，入参为 fn（需要执行的函数）、times（重试次数）、interval（重试的时间间隔）。

## 实现

```ts
const retryPromise = (fn, times, interval) => {
  if (times < 0) return;
  const run = (_times) => {
    return new Promise((resolve, reject) => {
      fn.then(resolve).catch((reason) => {
        if (_times < 0) {
          reject(times);
        } else {
          setTimeout(() => {
            run(_times--);
          }, interval);
        }
      });
    });
  };
};
```
