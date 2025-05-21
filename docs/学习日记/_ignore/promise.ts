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

class MyPromise<T> {
  state: PromiseState = PromiseState.pending;
  value: T;
  reason: any;
  static reject(r) {
    return new MyPromise((_, reject) => {
      reject(r);
    });
  }
  _resolve(v: any) {
    if (this.state === PromiseState.pending) {
      this.state = PromiseState.fulfilled;
      this.value = v;
    }
  }
  _reject(r: any) {
    if (this.state === PromiseState.pending) {
      this.state = PromiseState.rejected;
      this.reason = r;
    }
  }
  constructor(func: PromiseConstructorParams) {
    func(this._resolve, this._reject);
  }
  then(onFulfilled, onRejected) {
    if (
      this.state === PromiseState.fulfilled &&
      typeof onFulfilled === "function"
    ) {
      try {
        const res = onFulfilled.call(null, this.value);
        resolutionPromise(this, res);
        // TODO 返回新的 promise
        return this;
      } catch (e) {
        return MyPromise.reject(e);
      }
    }
    if (
      this.state === PromiseState.rejected &&
      typeof onRejected === "function"
    ) {
      const res = onRejected.call(null, this.value);
      resolutionPromise(this, res);
      // TODO 返回新的 promise
      return this;
    }
  }
}

function resolutionPromise(promise, x) {}
