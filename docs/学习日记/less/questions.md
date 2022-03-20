# less 变量

@primaryColor:#ff7f50;

h1 {
color:@primaryColor;
}

## Mixin 在 less 中有什么用

实现代码复用，在一组样式中，使用其他选择器的样式

```less
.round-borders {
  border-radius: 5px;
}

.menu {
  .round-borders;
}
```

## 嵌套在 less 中有什么用呢

嵌套规则描述了 html 的层次结构，使得在 css 中可以感受到 html 的布局

```less
.header {
  .title {
    color: #000;
  }
}
```

## less 与 sass 的区别

.-.|.-.
less | sass
由 js 编写 | 由 ruby 编写
变量由 @ | 变量 $
Mixin | Compass

## & 符号

用于嵌套规则中父选择器的伪类或伪元素

## 命名空间和访问器有什么用

## extend 伪类

```less
h2 {
  &:extend(.style);
}
.style {
  color: red;
}
```
