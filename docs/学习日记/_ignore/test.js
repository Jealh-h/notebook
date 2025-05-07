// class LRUCache {
//   cacheMap = new Map();
//   opacity = 0;
//   constructor(opacity) {
//     this.opacity = opacity;
//   }

//   getAll() {
//     return this.cacheMap.keys();
//   }

//   get(key) {
//     const v = this.cacheMap.get(key);
//     return v;
//   }

//   set(key, value) {
//     if (this.cacheMap.has(key)) {
//       // 刷新旧值
//       this.cahceMap.delete(key);
//     } else if (this.cacheMap.size >= this.opacity) {
//       // keys 为插入顺序，取插入最早的一项删除
//       const oldOne = this.cacheMap.keys().next();
//       this.cacheMap.delete(oldOne.value);
//     }

//     this.cacheMap.set(key, value);
//   }
// }

// const LRU = new LRUCache(3);
// LRU.set("p1", "p1");
// LRU.set("p2", "p2");
// LRU.set("p3", "p3");
// LRU.set("p4", "p4");
// console.log(LRU.getAll());

// const a = { key_1: 1, key_2: [1, 2, 3] };
// a.innera = a;

// function deepClone(target, weakMap = new WeakMap()) {
//   if (typeof target !== "object" || target === null) {
//     return target;
//   }
//   const obj = {};
//   if (weakMap.has(target)) {
//     return weakMap.get(target);
//   }
//   weakMap.set(target, obj);
//   for (const key in target) {
//     if (Object.hasOwn(target, key)) {
//       obj[key] = deepClone(target[key], weakMap);
//     }
//   }
//   return obj;
// }

// const b = deepClone(a);

// console.log(b);
// console.log(b === a);
// console.log(b.key_2 === a.key_2);
// console.log(b.b === a.b);
