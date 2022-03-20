# Set

- Set 对象允许你存储任何类型的唯一值，无论是原始值还是对象引用

## 值得相等

+0 === -0 true
NaN !== NaN true 但在 set 中不能同时存在

## constructor

new Set()

## 静态属性

get Set[Symbol.species]
返回默认的构造函数

## 实例属性

prototype\_

- size 返回 Set 对象中的值的个数
- add 在 Set 对象尾部添加一个元素，返回该 Set 对象
- clear 清除所有元素
- delete 删除特定的值，返回在删除前执行 has 的结果
- entries 返回按插入顺序排列的所有元素的值的数组[]Iterator，每个值得键和值相等
  返回 SetIterator
- forEach 按照插入顺序，为 set 对象中得每一个值调用一次 callbackFn
- has 返回一个布尔值，表示在 Set 中存在与否
- keys 与 values()方法相同，返回一个新的迭代器对象，该对象包含 Set 对象中得按插入顺序排列得所有元素得值
- values 返回按插入顺序排列的所有元素的值。

## Set 与 Array 互换

```javascript
let mySet = new Set([1, 2, 3, 4]);

// 获取数组
// 使用展开运算符进行转换为Array
[...mySet];

// 求交集
let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
let intersection = new Set([...set1].filter((item) => set2.has(item)));
// 求差集
let difference = new Set([...set1].filter((item) => !set2.has(item)));
```

## 集合运算

```javascript
// 超集
function isSuperset(set, subset) {
  for (let item of subset) {
    if (!set.has(item)) return false;
  }
  return ture;
}
// 联合
function union(set1, set2) {
  return new Set([...set1, set2]);
}
```

## 大小写敏感

```javascript
new Set("firefox"); // Set(6) {'f', 'i', 'r', 'e', 'o', 'x'}
new Set("Firefox"); // Set(6) {'F', 'i', 'r', 'e','f', 'o', 'x'}
```
