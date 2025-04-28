## SWR（stale while revalidate） 一种 HTTP 缓存失效策略

### 含义

stale-while-revalidate 允许客户端在缓存数据过期后，先使用过期的缓存数据快速响应用户请求，同时在后台异步重新验证并更新缓存。这样可以避免因等待新数据加载而导致的延迟，提供更好的用户体验。

### JS 实现

```js
const cacheMap = new Map();

function swr(source, maxAge) {
  const result = {
    value: 123,
    cacheTime: 1234,
  };
  const cache = cacheMap.get(source) || { value: null, cacheTime: 0 };
  const now = new Date().valueOf();
  const isOutDate = now - cache.cacheTime > maxAge;
  if (!isOutDate) {
    return cache;
  } else {
    return new Promise((resolve) => {
      fetch(source).then((res) => {
        resolve(res.json());
      });
    });
  }
}
```
