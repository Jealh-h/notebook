# async - await

> async 是 generator 函数的语法糖

## 基本使用

```typescript
const fetchList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 2000);
  });
};

async function query() {
  const data = await fetchList();
  console.log(data); // [1,2,3,4]
}
```

## 上述示例改写成 generator 函数

```typescript
function* queryGen() {
  const data = yield fetchList();
  console.log(data);
  return "result";
}
```

**generator 函数是不会自动执行的，每一次调用它的 next 方法，会停留在下一个 yield 的位置。利用这个特性，我们只要编写一个自动执行的函数，就可以让这个 generator 函数完全实现 async 函数的功能。**

## 使用 generator 实现 async await

> 关键点在于自执行函数，通过 done 来判断是否需要结束

```typescript
function autoRunGenerator(generatorFun) {
  return function () {
    // 这里还没有运行，需要调用 next 才会开始运行
    const gen = generatorFun.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function autoRun(step, arg) {
        let generatorFnResult;
        // gen.next("传递到 yield 左边的值")
        try {
          generatorFnResult = gen[step](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = generatorFnResult;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => autoRun("next", val),
            (err) => autoRun("error", err)
          );
        }
      }
      autoRun("next");
    });
  };
}
```
