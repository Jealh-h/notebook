# flex

- flex: flex-grow flex-shrink flex-basis

## 创建 flex 容器

display: flex / inline-flex

## flex 容器中元素的特点

- 元素排列为一行 (flex-direction 属性的初始值是 row)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小
- flex-basis 属性为 auto。
- flex-wrap 属性为 nowrap。

## 单值语法

- 一个无单位数字：flex: x 1 0;
- 一个有效宽度值：flex: flex-basis
- 关键字 none,auto 或者 initial

## 双值语法

> 第一个值必须是无单位数，且作为 flex-grow 的值。第二个值为下面之一

- 一个无单位数，作为 flex-shrink 的值
- 一个有效宽度值，当作 flex-basis 的值

## 三值语法

- 第一个值必须是无单位数，flex-grow
- 第二个值必须是无单位数，flex-shrink
- 第三个值必须是一个有效的宽度值，flex-basis

## 取值

- initial: flex: 0 1 auto
- auto: flex: 1 1 auto
- none: flex: 0 0 auto

- flex-grow 负值无效、省略为 1、初始为 0
- flex-shrink 负值无效、省略为 1、初始为 1
- flex-basis 若值为 0，必须加上单位，否则被视为伸缩性，省略是默认为 0、初始为 auto

## 例子

flex: 1
展开为：
flex-grow: 1 flex-shrink: 1(默认) flex-basis: 0%(默认值)

## 初始值

- flex-grow: 0
- flex-shrink: 1
- flex-basis: auto

## flex 布局属性

## flex-direction（主轴方向）

- row
- row-reverse
- column
- column-reverse

row/row-reverse inline 水平排列
column/column-reverse block 垂直排列

## flex-flow(flex-direction 与 flex-wrap 的简写)

```css
flex-flow: row wrap;
```

## flex 元素属性--即 flex 容器里面元素的属性

## flex-basis

flex-basis 定义了该元素的空间大小

## flex-grow

占据可用空间

设定 flex-grow 值为 1， 容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。

## flex-shrink

如果我们的容器中没有足够排列 flex 元素的空间，那么可以把 flex 元素 flex-shrink 属性设置为正整数来缩小它所占空间到 flex-basis 以下.
只有在 flex 元素总和超出主轴才会生效
