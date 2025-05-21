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
// const obj = {};
// const a = { [obj]: 123 };

// console.log(a); // {'[object Object]': 123}

// const nativeGlobal = new Function("return this")();
// // console.log(nativeGlobal.fetch);

// function call() {
//   return "toString return";
// }
// const o = {};
// const bounded = Function.prototype.bind.call(call, o);
// console.log(call.toString());
// console.log(bounded.toString());

// const fakeWindow = {
//   //   test: 123,
//   test_2: "abc",
// };

// Object.defineProperty(fakeWindow, "test", {
//   configurable: true,
//   writable: true,
//   value: 123,
// });

// const proxy = new Proxy(fakeWindow, {
//   get: (target, p) => {
//     return target[p];
//   },
//   has: (target, p) => {
//     return false;
//   },
//   getOwnPropertyDescriptor: (t, p) => {
//     return Object.getOwnPropertyDescriptor(t, p);
//   },
// });
// console.log(proxy.test);
// console.log(proxy.test_2);
// console.log(Object.getOwnPropertyDescriptor(proxy, "test"));

const p = new Promise((res, rej) => {
  res(123);
})

const p2 = p.then((res) => {
  console.log(this === globalThis, this === p, res);
})

console.log(p2 === p);

const p3 = p2.then(() => {
  return 456;
})

console.log(p3 === p2);