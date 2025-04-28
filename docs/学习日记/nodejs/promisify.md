## Promisify

> 常用于将 callback 形式的调用方式转换成 promise 的格式

```js
function promisify(func, ...params) {
  return new Promise((resolve, reject) => {
    func.apply(this, params, (res, err) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}
```
