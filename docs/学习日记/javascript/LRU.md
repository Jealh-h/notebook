## LRU

### 含义

LRU（Least recently used）最近最少使用, 内存不够时，先替换掉访问频率最低的缓存。

### 实现

```js
class LRUCache {
  cacheMap = new Map();
  opacity = 0;
  constructor(opacity) {
    this.opacity = opacity;
  }

  getAll() {
    return this.cacheMap.keys();
  }

  get(key) {
    const v = this.cacheMap.get(key);
    return v;
  }

  set(key, value) {
    if (this.cacheMap.has(key)) {
      // 刷新旧值
      this.cahceMap.delete(key);
    } else if (this.cacheMap.size >= this.opacity) {
      // keys 为插入顺序，取插入最早的一项删除
      const oldOne = this.cacheMap.keys().next();
      this.cacheMap.delete(oldOne.value);
    }

    this.cacheMap.set(key, value);
  }
}

const LRU = new LRUCache(3);
LRU.set("p1", "p1");
LRU.set("p2", "p2");
LRU.set("p3", "p3");
LRU.set("p4", "p4");
console.log(LRU.getAll());
```
