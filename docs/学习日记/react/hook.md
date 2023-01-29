# react hook 原理

> react hook 是 react 由类组件走向函数组件的一大里程，所以 hook 在 react 开发中尤为重要。

## 介绍

什么是 react hook

[hooks 介绍](https://zh-hans.reactjs.org/docs/hooks-faq.html#gatsby-focus-wrapper)

> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 常见 hook

- useState
- useEffect
- useCallback
- useMemo
- useContext
- useRef
- useReducer
- useImperativeHandle
- useLayoutEffect
- ...

我们经常使用它们，那我们是否了解其实现呢，那下面我们就来阅读一下源码

## 基础

hook 以一个链表存在 fiberNode 上。

```typescript
// hook 类型
type Hook = {
  memoizedState: any;
  baseState: any;
  baseQueue: Update<any, any> | null;
  queue: UpdateQueue<any, any> | null;
  next: Hook | null;
};

type Update<S, A> = {
  lane: Lane;
  action: A;
  eagerReducer: ((S, A) => S) | null;
  eagerState: S | null;
  next: Update<S, A>;
};

type UpdateQueue<S, A> = {
  pending: Update<S, A> | null;
  interleaved: Update<S, A> | null;
  lanes: Lanes;
  dispatch: (p: A) => mixed | null;
  lastRenderedReducer: (S, A) => S | null;
  lastRenderedState: S | null;
};
```

## useState

### 用法

```typescript
const [state, setState] = useState();
```

### 源码

```typescript
function mountState<S>(
  initialState: (() => S) | S
): [S, Dispatch<BasicStateAction<S>>] {

  // 新建 Hook, 并把 workInProgressHook 指向最新 hook
  // 返回的 即为 workInProgressHook
  const hook:Hook = mountWorkInProgressHook();

  // 获取 useState 的初始 state
  if (typeof initialState === 'function') {
    initialState = initialState();
  }

  // 在 hook 对象上存储 state
  hook.memoizedState = hook.baseState = initialState;

  const queue = (hook.queue = {
    pending: null,
    interleaved: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: (initialState: any),
  });
  const dispatch: Dispatch<
    BasicStateAction<S>
  > = (queue.dispatch = (dispatchAction.bind(
    null,
    currentlyRenderingFiber,
    queue
  ) as any));
  return [hook.memoizedState, dispatch];
}
```
