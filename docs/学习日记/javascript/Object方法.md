# Object 的方法

## Object(value?)

- 构造函数

1. 如果传入 null 或者 undefined，则返回一个空对象
2. 如果给定值是一个已经存在的对象，则返回对象的引用

## Object.create(target,properties)

- 返回一个新对象，该对象的\_\_proto\_\_属性的值是 target

```javascript
o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});
```

## Object.defineProperty(Obj,prop,descriptor)

- descriptor 可取:

1. configurable
2. enumerable
3. value
4. writable
5. get
6. set

- 拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
- 属性值和函数的键 value、get 和 set 字段的默认值为 undefined。
- 通过 defineProperty 创建属性，属性的 configurable、enumerable 和 writable 的默认值都是 false

- Enumerable 属性
  enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

- Configurable 属性
  说明 value 与 writable 可以修改
  configurable 特性表示对象的属性是否可以被删除，以及**除 value** 和 **writable** 特性外的其他特性是否可以被修改。
