# WeakSet&Set

## WeakSet

- 如果传入一个可迭代对象作为参数, 则该对象的所有迭代值都会被自动添加进生成的 WeakSet 对象中。null 被认为是 undefined。

### 与Set的区别

- WeakSet只能是对象的集合，而**不能**是任何类型任何值。
- WeakSet是弱引用，如果没有其他对WeakSet中对象的引用，那这些对象会被当成垃圾回收掉。
- WeakSet不可枚举

### 属性

- length

### WeakSet构造函数

- new WeakSet([iterable])

### 方法

- add(value)
返回值：WeakSet对象

- delete(value)
返回值：boolean

- has(value)
返回值：boolean

## Set

- 可以存放原始值或者对象引用

### Set构造函数

- new Set([iterable])

### prototype属性

- size
返回Set对象中的值的个数

### prototype方法

- add(value)
返回值：Set本身

- clear()
清除所有元素
返回值：undefined

- delete(value)
移除与value相等的值
返回值：boolean

- entries()
返回一个新的迭代器对象，按插入顺序排列
返回值：SetIterator

- forEach(callback,[thisArg])
返回值：undefined

- has(value)
返回值：boolean

- keys()/values()
返回值：一个Iterator对象

### 示例

```javascript
let text = 'India';

let mySet = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size;  // 5

// 大小写敏感 & duplicate ommision
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]

```
