# JSON.stringify的坑

## 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化

```javascript
a = {name:123}
JSON.stringify(a) // '{"name":123}'
// 定义toJSON方法
a.toJSON = ()=>{return {age:123}}
JSON.stringify(a)
'{"age":123}'
```

## 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中

## 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值

boolean、number、string转换成原始值

## undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined)

```javascript
JSON.stringify(function(){})
undefined
JSON.stringify(undefined)
undefined
// 忽略function、symbol、undefined
a = {fun:()=>{},name:undefined,key:Symbol('key')}
{name: undefined, key: Symbol(key), fun: ƒ}
JSON.stringify(a)
'{}'
```

## 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误

## Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理

## NaN 和 Infinity 格式的数值及 null 都会被当做 null

```javascript
JSON.stringify({a:NaN,b:Infinity})
'{"a":null,"b":null}'
```

## 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性
