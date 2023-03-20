# 虚拟 DOM

## 何为虚拟 DOM

简单来说，就是一个 JavaScript 对象,描述真实 dom

```ts
{
  $$typeof: Symbol(react.element),
  key: null,
  props: {children: 'this is animated children', className: 'fade-enter-from'},
  ref: {current: div.fade-enter-active.fade-enter-to},
  type: "div",
  _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …},
  _store: {validated: true},
  _self: undefined,
  _source: {fileName: 'D:\\...'},
}
```

## 为何存在？

- 函数式 UI 的编程方式实现高效的声明式编程。
- 对真实渲染内容的抽象，可以描述除了 浏览器 dom 之外的其他渲染元素，安卓、ios、小程序等等。
- 差量更新：更新改变的部分
- 批量更新：比如极短的时间里多次操作同一个 DOM，实际用户侧看到的是最后一次更新的效果
