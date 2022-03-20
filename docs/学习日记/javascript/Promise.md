# Promise

## 测试用例

```typescript
let promises = [
  new Promise((res,rej)=>{
    setTimeout(res,3000,1);
  }),
  new Promise((res,rej)=>{
    setTimeout(rej,1000,2);
  }),
  new Promise((res,rej)=>{
    setTimeout(res,4000,3)
  }),
  new Promise((res,rej)=>{
    setTimeout(rej,0,4)
  }),
]

```

## Promise.all

- 接受一个可迭代对象参数
- 如果可迭代对象为空，则同步返回一个已完成的 promise
- 可迭代对象不含 promise,异步返回一个已完成的 promise
- 其他情况，返回一个 pending 的 promise

```javascript
// promise.all

Promise.all = function (argus) {
  let promises = Array.from(argus);
  if (!promises) {
    throw new Error('the param can"t be undefined');
  }

  return new Promise((resolve, reject) => {
    if (!promise.length) {
      resolve(argus);
    } else {
      let result = [];
      let resolved = 0;
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          (value) => {
            result[i] = value;
            resolevd++;
            // 不能使用result.length
            if (resolved === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
```

## Promsie.allSettled  在所有的promsie都被 fulfilled 或者 rejected 后返回的promise

- 参数 iterable 一个可迭代的对象，例如Array，其中每个成员都是Promise
- 返回值 promise, 敲定的结果是一个对象数组 [{reason:'...',status:'rejected'},{value:'...',status:'fulfilled'}]

```javascript

Promise.allSettled = function(promises){
return new Promise((resolve, reject) => {
    let result = [];
    for (let i = 0; i < promises.length; i++) {
        let promise = promises[i];
        Promise.resolve(promise).then(data => {
            result[i] = {
                value: data,
                status: 'fulfilled'
            };
            if (result.length === promises.length) {
                resolve(result);
            }
        }).catch(err => {
            result[i] = {
                reason: err,
                status: 'rejected'
            };
            if (result.length === promises.length) {
                resolve(result);
            }
        })
    }
})
}

```

## Promise.resolved(value)

- 返回一个以给定value值解析后的Promise对象
- 如果 value instanceof Promise 那么直接返回这个 value
- 如果这个值是thenable(带有then方法)，返回的promise会跟随这个thenable对象
- 将类promise对象的多层嵌套展平

```javascript
// Resolve一个thenable对象
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
});
console.log(p1 instanceof Promise) // true, 这是一个Promise对象

p1.then(function(v) {
    console.log(v); // 输出"fulfilled!"
  }, function(e) {
    // 不会被调用
});

// Thenable在callback之前抛出异常
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError("Throwing");
  resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable在callback之后抛出异常
// Promise resolves
var thenable = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});

```

## Promise.rejected(reason)

- 返回一个带有拒绝原因的Promise对象

```javascript
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
```

<!-- 返回第一个不管成功还是失败的 -->
## Promise.race(iterable)

- 返回一个promise,一旦迭代器中的某个promise解决或者拒绝，返回的promise就会拒绝或接受

polyfill

```javascript
Promise.race = function(promises){
  if(!promises[Symbol.iterator]){
    throw('请传入一个iterable对象')
  };
  if(!promises.length){
    return Promise.resolved([]);
  }
  return new Promise((resolve,reject)=>{
    for(let promise of promises){
      Promise.resolve(promise).then(data=>{
        resolve(data);
      }).catch(err=>{
        reject(err);
      })
    }
  })
}
```
<!-- 只要其中一个成功就返回那个--即返回第一个成功的 -->
## Promise.any(iterable)

- 空可迭代对象，返回一个已失效的promise
- 没有任何promise,返回一个异步完成的promise
- 其他情况返回一个pending的promise

<!-- 失败情形 -->
```javascript
const pErr = new Promise((resolve, reject) => {
  reject('总是失败');
});

Promise.any([pErr]).catch((err) => {
  console.log(err);
})
VM2227:6 AggregateError: All promises were rejected
Promise {<fulfilled>: undefined}
```

## Promise.finally(function)

- 在promise状态敲定后会 执行function，不管是 resolve 还是 reject
