# BFC

## 什么是 BFC

块级格式化上下文，页面由许多的 Formating Context 组成，它是页面的一块渲染区域，并且有自己的渲染规则，决定子元素如何排列。

> **BFC的目的就是：形成一个完全独立的空间，让空间中的子元素不会影响到外面的布局**

## BFC 布局规则

- BFC 内，盒子依次垂直排列
- 两个盒子的垂直距离有 margin 决定，属于同一个 BFC 的相邻盒子会发生 margin 重叠（使用大的 margin）
- BFC 内，BFC 不会与 float box 重叠
- BFC 是页面一个隔离的独立容器，容器里面的元素不会影响外面的元素，反之也如此
- BFC 高度，浮动元素会参与计算

## BFC 条件

- 根元素
- float 不为none元素
- position 为 absolute 或 fixed
- overflow 不为 visible
- display 为 inline-block、table-cell、table-caption

## bfc解决的问题

1. 当子元素float后，父元素会发生**高度塌陷**，因为float脱离了文档流，父元素没能被撑开

    解决：使父元素触发BFC，让父元素形成一个独立的渲染区域。因此让子元素不会影响外边元素。

2. 自适应布局

    - 两栏布局：左边设置浮动，右边设置宽度100%并清除浮动

3. 外边距重叠

    - margin-top与margin-bottom合并为单个边框，其大小为单个边距的最大值。
