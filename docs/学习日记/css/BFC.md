# BFC

## 什么是 BFC

块级格式化上下文，页面由许多的 Formating Context 组成，它是页面的一块渲染区域，并且有自己的渲染规则，决定子元素如何排列。

## BFC 布局规则

- BFC 内，盒子依次垂直排列
- 两个盒子的垂直距离有 margin 决定，属于同一个 BFC 的相邻盒子会发生 margin 重叠（使用大的 margin）
- BFC 内，BFC 不会与 float box 重叠
- BFC 是页面一个隔离的独立容器，容器里面的元素不会影响外面的元素，反之也如此
- BFC 高度，浮动元素会参与计算

## BFC 条件

- 根元素
- float 元素
- position 为 absolute 或 fixed
- overflow 不为 visible
- display 为 inline-block、table-cell、table-caption
