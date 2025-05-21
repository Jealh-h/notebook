# promise a+ 规范

> 参考：https://promisesaplus.com/

## 术语

1. promise 是一个具有 then 方法的对象或者函数

2. thenable 是一个定义有 then 方法的对象或者函数

3. value 是一个合法的 JavaScript 值，包括 undefined、thenable 或者一个 promise

4. exception 是一个值，由 throw 语句抛出

5. reason 是一个值，表示一个 promise 被 rejected 的原因

## 要求

### promise 状态

一个 promise 必须是 pending、fulfilled、 rejected 中的一种

1. 对于 pending 态的 promise：
   - 可以转换成 fulfilled 或者 rejected
2. 对于 fulfilled 的 promise：
   - 不能转变成其他状态
   - 必须拥有一个不可改变的 value
3. 对于 rejected 的 promise：
   - 不能转变成其他状态
   - 必须拥有一个 reason 且不能改变

### then 方法

一个 promise 必须提供 then 方法去访问当前或者最终的 value 或者 reason

then 方法接受两个参数

```TS
promise.then(onFulfilled, onRejected)
```

- 对于两个方法都是可选的
  - 当 onFulfilled 不是一个函数时，它必须被忽略
  - 当 onRejected 不是一个函数时，它必须被忽略
- 当 onFulfilled 是一个函数时:
  - 它必须在 promise 是 fulfilled 时被调用，promise 的 value 作为第一个参数
  - 它不能在 promise fulfilled 之前被调用
  - 它不能被调用超过一次
- 当 onRejected 是一个函数时：
  - 它必须在 promise 是 rejected 后调用，promise 的 reason 为第一个参数
  - 它不能在 promise rejected 之前被调用
  - 它不能被调用超过一次
- onFulfilled 或者 onRejected 不能被调用，知道执行上下文栈包含平台代码时。
- onFulfilled 以及 onRejected 必须作为函数被调用，没有 this 值。
- then 可以被多次调用在同一个 promise 上
  - 当 promise 是 fulfilled，所有的 onFulfilled 回调必须按照它们创建的顺序被调用
  - 当 promise 是 rejected，所有的 onRejected 回调必须按照它们创建的顺序被调用
- then 必须返回一个 promise

```ts
promise2 = promise1.then(onFulfilled, onRejected);
```

    - 如果 onFulfilled 或者 onRejected 都返回一个值 x，则执行 [[Resolve]](promise2, x)
    - 如果 onFulfilled 或者 onRejected 都抛出一个异常 e，promise2 必须 rejected 且原因是 e
    - 如果 onFulfilled 不是一个函数且 promise1 是 fulfilled, promise2 必须是 fulfilled，其 值与 promise1 一样
    - 如果 onRejected 不是一个函数且 promise1 是 rejected, promise2 必须被 rejected，其 reason 与 promise1 一样

## promise 解决程序（[[Resolve]](promise, x)）

promise 解决程序是一个抽象操作，输入是一个 promise 以及一个 value。记为 [[Resolve]](promise, x)，当 x 是一个 thenable，它会尝试让 promise 采用 x 的状态，前提是 x 的行为至少有点像 promise，否则它会用 x 的值来 fulfills promise

这种对 thenables 的处理方法，允许 promise 实现互操作，只要它们暴露了符合 promise Promises/A+ 的 then 方法，它还允许 Promises/A+ 实现用合理的 then 方法同化不符合要求的实现。

运行 [[Resolve]](promise,x) 需要执行一下步骤：

1. 如果 promise 以及 x 是同一个对象，使用一个 TypeError 异常作为 reason reject promise
2. 如果 x 是一个 promise，根据状态
   - 如果 x 是 pending， promise 必须保留 pending 直到变为 fulfilled 或者 rejected
   - 如果 x 是 fulfilled， fulfill promise 为 同一个值
   - 如果 x 是 rejected，reject promise 为同一个 原因
3. 其他情况，当 x 是一个函数或者 对象时
   - 让 then 作为 x.then
   - 如果检索 x.then 属性导致抛出异常 e，则以 e 为 reason reject promise
   - 如果 then 是一个函数，以 x 作为其 this 调用它，第一个参数为 resolvePromise，第二个参数为 rejectPromise
     - 当 resolvePromise 被调用时，有 y 为 value，执行 [[Resolve]](promise, y)
     - 当 rejectPromise 被调用时，有 r 作为 reason，reject promise 为 r
     - 如果 resolvePromise 或者 rejectPromise 都被调用，或对同一参数进行多次调用，第一次调用会被采用，任何其他呼叫都将被忽略。
     - 如果调用 then 抛出一个错误 e，
       - 如果 resolvePromise 或者 rejectPromise 已经被调用，忽略 e
       - 否则， reject promise 为 e 为 reason
   - 如果 then 不是一个函数，fulfill promise 为 x value

- 如果 x 不是一个 对象或者函数，fulfill promise 为 x value

## 注意

1. 这里的 platform code 指 引擎、环境和 promise 实现代码。在实践中，这一要求可确保事件循环转动后，onFulfilled 和 onRejected 能够异步执行。并带有新鲜的堆栈。可以使用 宏任务机制如 setTimeout 或者 setimmediate 或者使用 微任务机制，如 MutationObserver 或者 process.nextTick. 由于 promise 的实现被视为 platform code，因此它本身可能包含一个任务安排的队列或者 trampoline，其中成为处理程序

2. 也就是说，在严格模式下，这在它们内部全是 undefined 的,在 宽松模式下，这将是 global object

3. 在实现上允许 promise2 === promise1, 前提是实现满足所有要求，每个实现都应记录它能否产生 promise2 === promise1 以及在什么条件下产生

4. 一般来说，只有当 x 来自当前的实现时，我们才会知道它是一个真正的 promise。这个条款允许使用执行特定手段来采用已知符合 promise 的状态。

5. 首先存储 x.then 的引用，然后测试该引用，最后调用该引用，这一过程避免了对 x.then 属性的多次访问。这种预防措施对于确保访问者属性的一致性非常重要，因为访问者属性的值可能会在两次检索之间发生变化

6. 实现不应对 thenable 链的深度设置任意限制，并假定超出任意限制后递归将是无限的。只有真正的循环才会导致 TypeError；如果遇到不同 thenable 的无限链，那么永远递归才是正确的行为。
