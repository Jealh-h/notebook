# any 与 unknown 的区别

> 总的来说，unknown更加的严格

## 例子

- unknown 类型不能随便添加属性

```typescript
let anyType: any = 123
angType.age = 123 // ok

let unknownType: unknown = 123
unknownType.age = 123 // error

```

- unknown 类型不能赋值给 any 或 unknown 以外的其他类型

```typescript
let anyType: any;
let stringType: string;
let numberType: number;

let unknownType: unknown = 123

anyType = unknownType // ok
stringType = unknownType // error
numberType = unknownType // error

```

## 将 unknown 类型转变为其他类型

- 类型判断 typeof

```typescript
function transType(value: unknown): string
{
  if(typeof value === 'string'){
    return value;
  }
  return String(value);
}

```

- 使用 as 类型转换

```typescript
const unknownType: unknown = 123

const numberType = unknown as number // ok

```
