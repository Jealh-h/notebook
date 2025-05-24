enum PromiseState {
  fulfilled = "fulfilled",
  pending = "pending",
  rejected = "rejected",
}
type funWithParam = (p: any) => void;
type PromiseConstructorParams = (
  onResolve: funWithParam,
  onRejected: funWithParam
) => void;

class MyPromise<T = unknown> {
  state: PromiseState = PromiseState.pending;
  private value: T | undefined;
  private reason: any;
  time: number;

  // 构造函数里面添加两个数组存储成功和失败的回调
  private onFulfilledCallbacks: Array<Function> = [];
  private onRejectedCallbacks: Array<Function> = [];

  static reject(r: unknown) {
    return new MyPromise((_, reject) => {
      reject(r);
    });
  }
  static resolve(v: unknown) {
    return new MyPromise((resolve) => {
      resolve(v);
    });
  }

  static rejected(r: unknown) {
    return new MyPromise((_, reject) => {
      reject(r);
    });
  }
  static resolved(v: unknown) {
    return new MyPromise((resolve) => {
      resolve(v);
    });
  }
  _resolve(v: any) {
    if (this.state === PromiseState.pending) {
      this.state = PromiseState.fulfilled;
      this.value = v;
      this.onFulfilledCallbacks.forEach((f) => {
        if (typeof f === "function") {
          f(this.value);
        }
      });
    }
  }
  _reject(r: any) {
    if (this.state === PromiseState.pending) {
      this.state = PromiseState.rejected;
      this.reason = r;
      this.onRejectedCallbacks.forEach((f) => {
        if (typeof f === "function") {
          f(this.reason);
        }
      });
    }
  }
  constructor(func: PromiseConstructorParams) {
    this.time = +new Date();
    try {
      // bind method to avoid in _resolve access this get undefined
      func(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }
  then(
    onFulfilled?: (v: unknown) => unknown,
    onRejected?: (r: unknown) => unknown
  ): MyPromise {
    const that = this;
    let resolvePromise2: Function, rejectedPromise2: Function;
    if (this.state === PromiseState.fulfilled) {
      const promise2: MyPromise = new MyPromise((resolve, reject) => {
        resolvePromise2 = resolve;
        rejectedPromise2 = reject;
      });

      if (typeof onFulfilled !== "function") {
        // 2.2.7.3 If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
        resolvePromise2!(that.value);
      } else {
        setTimeout(() => {
          // 2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value).
          try {
            const res = onFulfilled.call(undefined, this.value);
            resolutionPromise(promise2, res, resolvePromise2, rejectedPromise2);
          } catch (e) {
            rejectedPromise2!(e);
          }
        }, 0);
      }
      return promise2;
    }

    if (this.state === PromiseState.rejected) {
      const promise2 = new MyPromise((resolve, reject) => {
        resolvePromise2 = resolve;
        rejectedPromise2 = reject;
      });
      if (typeof onRejected !== "function") {
        // 2.2.7.4 If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.
        rejectedPromise2!(that.reason);
      } else {
        setTimeout(() => {
          try {
            const res = onRejected.call(undefined, this.reason);
            resolutionPromise(
              promise2,
              res,
              resolvePromise2!,
              rejectedPromise2!
            );
          } catch (e) {
            rejectedPromise2!(e);
          }
        }, 0);
      }

      return promise2;
    }

    // promise1 is pending
    const promise2 = new MyPromise(function (resolve, reject) {
      resolvePromise2 = resolve;
      rejectedPromise2 = reject;
    });

    // ensure promise2 can get the promise1 value or reason, ignore non-function onFulfilled or onRejected
    let rawOnFulfilled = onFulfilled,
      rawOnRejected = onRejected;

    // custom define function v => v, ensure in ResolutionPromise can get the promise's value or reason
    if (typeof rawOnFulfilled !== "function") {
      rawOnFulfilled = (v: unknown) => v;
    }

    if (typeof rawOnRejected !== "function") {
      rawOnRejected = (r: unknown) => r;
    }

    that.onFulfilledCallbacks.push(() => {
      setTimeout(() => {
        try {
          if (typeof onFulfilled !== "function") {
            // 2.2.7.3 If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
            resolvePromise2(that.value);
          } else {
            const res = rawOnFulfilled.call(undefined, that.value);
            resolutionPromise(
              promise2,
              res,
              resolvePromise2!,
              rejectedPromise2!
            );
          }
        } catch (e) {
          rejectedPromise2!(e);
        }
      }, 0);
    });

    that.onRejectedCallbacks.push(() => {
      setTimeout(() => {
        try {
          if (typeof onRejected !== "function") {
            // 2.2.7.4 If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.
            rejectedPromise2(that.reason);
          } else {
            const res = rawOnRejected.call(undefined, that.reason);
            resolutionPromise(
              promise2,
              res,
              resolvePromise2!,
              rejectedPromise2!
            );
          }
        } catch (e) {
          rejectedPromise2!(e);
        }
      }, 0);
    });
    return promise2;
  }
  static deferred() {
    var result: Record<string, any> = {};
    result.promise = new MyPromise(function (resolve, reject) {
      result.resolve = resolve;
      result.reject = reject;
    });

    return result;
  }
}

function resolutionPromise(
  promise: MyPromise,
  x: any,
  resolvePromise: any,
  rejectPromise: any
) {
  if (promise === x) {
    // 2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
    return rejectPromise(
      new TypeError(`The x param shouldn't be a same object ${x}`)
    );
  }
  let called = false;
  if (x instanceof MyPromise) {
    return x.then(
      (v) => {
        if (called) return;
        called = true;
        // resolvePromise(v);
        resolutionPromise(promise, v, resolvePromise, rejectPromise);
      },
      (r) => {
        if (called) return;
        called = true;
        rejectPromise(r);
      }
    );
  }

  if ((typeof x === "function" || typeof x === "object") && x !== null) {
    try {
      const then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
          (v: any) => {
            if (called) return;
            called = true;
            resolutionPromise(promise, v, resolvePromise, rejectPromise);
          },
          (r: any) => {
            if (called) return;
            called = true;
            rejectPromise(r);
          }
        );
      } else {
        resolvePromise(x);
      }
    } catch (e) {
      // 2.3.3.3.4 If calling then throws an exception e,
      //  2.3.3.3.4.1 If resolvePromise or rejectPromise have been called, ignore it.
      //  2.3.3.3.4.2 Otherwise, reject promise with e as the reason.
      if (called) return;
      rejectPromise(e);
    }
    // interappt
    return;
  }

  // 2.3.4 If x is not an object or function, fulfill promise with x.
  return resolvePromise(x);
}

// ============= test =================

function yFactory() {
  return {
    then: (resolvePromise: any) => {
      resolvePromise(3);
      throw 4;
    },
  };
}

function xFactory() {
  return {
    then(resolvePromise: any) {
      // setTimeout(() => {
      //   resolvePromise(yFactory());
      // }, 0);
      resolvePromise(yFactory());
    },
  };
}
const p1 = MyPromise.resolve(1)
  .then(() => {
    return xFactory();
  })
  .then((v: any) => {
    console.log("my", v);
  });

const p2 = Promise.resolve(2)
  .then(() => {
    return xFactory();
  })
  .then((v) => {
    console.log("origin", v);
  });

// @ts-ignore
module.exports = MyPromise;
