# 手写 promise

> 难点在于 then 的链式调用，then callback 为微任务

```js
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.result = null;
    this.reason = null;
    // pending 状态存储回调
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.result = result;
      this.onFulfilledCallbacks.forEach((callback) => {
        callback(result);
      });
    }
  }

  reject(reason) {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((callback) => {
        callback(reason);
      });
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        queueMicrotask(() => {
          try {
            if (typeof onFulfilled !== "function") {
              resolve(this.result);
            } else {
              let x = onFulfilled(this.result);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.state === "rejected") {
        queueMicrotask(() => {
          try {
            if (typeof onRejected !== "function") {
              reject(this.reason);
            } else {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              if (typeof onFulfilled !== "function") {
                resolve(this.result);
              } else {
                let x = onFulfilled(this.result);
                resolvePromise(promise2, x, resolve, reject);
              }
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              if (typeof onRejected !== "function") {
                reject(this.reason);
              } else {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              }
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    throw new TypeError("promise error");
  }
  if (x instanceof MyPromise) {
    x.then((y) => {
      resolvePromise(promise2, y, resolve, reject);
    }, reject);
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
    } catch (e) {
      return reject(e);
    }
    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}

let p = new MyPromise((res, rej) => {
  setTimeout(() => {
    res(123);
  }, 2000);
})
  .then((result) => {
    console.log("result:", result);
    return 456;
  })
  .then((result) => {
    console.log("result-2:", result);
  });
```
