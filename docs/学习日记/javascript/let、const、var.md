# let const var 区别

| 关键字 | 变量提升 | 暂时性死区 | 重复声明 | 块级作用域 | 初始值     | 重新赋值 |
| ------ | -------- | ---------- | -------- | ---------- | ---------- | -------- |
| var    | 会       | 不会       | 可以     | 不         | 可以不赋值 | 可以     |
| let    | 不会     | 会         | 不可以   | 是         | 可以不赋值 | 可以     |
| const  | 不会     | 会         | 不可以   | 是         | 需要       | 不可以   |

## 暂时性死区

- 一个块级作用域里面存在与块级作用域外的同名变量，块级作用域内是 let

```javascript
var a = "hello";

if (true) {
  a = "world"; // ReferenceError: Cannot access 'a' before initialization
  let a = "wowo";
}
```
