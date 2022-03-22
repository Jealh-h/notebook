# weakmap与map

## weakmap

- weakmap的键key只能是Object类型。原始数据类型不能作为key(比如Symbol)

- weakmap的键（key）是弱引用的，因此并不能枚举键，若要枚举键，请使用Map

> 如果应用程序的代码可以访问一个正由该程序使用的对象，垃圾回收器就不能回收该对象， 那么，就认为应用程序对该对象具有**强引用**。
弱引用：是指**不能确保**其**引用的对象** 不 会被垃圾回收器回收的引用.

### 构造函数

```javascript
new WeakMap([iterable]？)
```

### 原型链方法

- delete(key)

返回值：boolean

- get(key)

返回值：value|undefined

- has(key)

返回值：boolean

- set(key,value)

返回值：WeakMap对象

## Map

- Map对象保存键值对，并且能记住键的插入顺序（与set相同），任何值都可作为键。

### Map构造函数

```javascript
new Map([iterable])

let m = new Map()
let m = new Map([
  [1,'one'],
  [2,'two'],
  [3,'three']
])
```

### 属性

- length

### prototype方法

- clear
移除Map对象中的所有元素。
返回值: undefined

- deletea(key)
返回值：boolean

- entries()
返回值: MapIterator.

```javascript
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

- forEach
参数：
  callback
  myMap 中每个元素所要执行的函数。它具有如下的参数

  value 可选
    每个迭代的值。
  key 可选
    每个迭代的键。
  map 可选
    被迭代的map（上文语法框中的 myMap）。
  thisArg 可选
    在 callback 执行中使用的 this 的值。
返回值:undefined

- get(key)
返回值:value|undefined

- has(key)
返回值：boolean

- keys
返回值：一个keys的迭代器

- set(key,value)
返回值：Map

- values
返回值：一个新的 Map 可迭代对象.

```javascript
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

### Map与Object比较

diff|Map|Object
:-:|:-:|:-:
键|Map默认情况不包含任何键，只有显示插入的键|原型链上可能有对象上同名的键
键的类型|任意值，函数，对象，基本类型|string或者Symbol、number（计算属性名）
键的顺序|以插入的顺序|无序，只有1字符串才有插入顺序
size|可通过Size获取|需要一点计算，Object.keys().length
迭代|iterable|获取键才能迭代
性能|频繁增删键表现更好|在频繁添加和删除键值对的场景下未作出优化。
