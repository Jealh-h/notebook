# typescript的一些关键字

## Pick与Omit

```typescript
interface person {
  name:string;
  age:number;
  gender:number
}
type omitType = Omit<person,"gender">
// 相当于 type omitType = {name:string;age:number}

type pickType = Pick<person,"name">
// 相当于 type pickType = {name:string}
```

- polyfill

```typescript
// pick
type myPick<O extends object,k extends keyof O> = {
  [P in K]:O[P]
}

// omit
type myOmit<O extends object,K extends keyof O> = myPick<O,Exclude<keyof O,K>>
```

## Partial

```typescript
type User = {
  id: number;
  age: number;
  name: string;
};

// Output:
// type PartialUser = {
//   id?: number | undefined;
//   age?: number | undefined;
//   name?: string | undefined;
// }
type PartialUser = Partial<User>;
```

- polyfill

```typescript
type myPartial<T> = {
  [K keyof T]?:T[K]
}
```

## Paramerters

- 取得某个函数的参数类型
- 用于获得函数的参数类型组成的元组类型。

```typescript
type A = Parameters<()=>void>; // []
type B = Parameters<typeof Array.isArray>; // [any]
type C = Parameters<typeof parseInt>; // [string,(number|undefined)?]
type D = Parameters<typeof Math.max>; // number[]

```

## ReturnType

- 提取函数类型的返回值

```typescript
type ReturnType<T extends (...args:any)=>any> = T extends (...args:any) => infer R ? R:any;
```

## infer

例子:
tuple转array

```typescript
type ElementOf<T> = T extends Array<infer E>?E:nerver
type TTuple = [string,number]
type ToUnion = ElementOf<TTuple>; // string | number
```

面试例题：

```typescript
interface Action<T> {
  payload?:T;
  type:string
}

interface Module {
  count:number;
  message:string;
  asyncMethod<T,U>(action:Promise<T>):Promise<Action<U>>;
  syncMethod<T,U>(action:Action<T>):Action<U>
}

type Result = Connect<Module>;
Result = {
  asyncMethod<T,U>(input:T):Action<U>;
  syncMethod<T,U>(action:T):Action<U>;
}

// 实现type Connect
// 保留属性为函数类型，其余的摒弃掉
// 把函数类型转化为<T,U>(args:T)=>Action<U>
type Connect<T> = {
  // [K in keyof T]: T[K] extends Function ? K:never; // 选出函数
}

// 选出函数
type pickFunction<T extends Object> = {
  [K in keyof T]:T[K] extends Function ? K:never;
}[keyof T];

// 转换函数
type TransitionFunc<F> = F extends (action:Promise<infer T>) => Promise<Action<infer U>> ? <T,U>(action:T)=>Action<U>:
F extends (action:Action<infer T>) => Action<infer U>
? <T,U>(action: T) => Action<U>:F;

// 组合pickFunction与TransitionFunc，实现Connect的方法

type Connect<T> = {
  [P in pickFunction<T>]:TransitionFunc<T[P]>
};

```
