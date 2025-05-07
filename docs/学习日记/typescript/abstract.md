# abstract

## 抽象类

抽象类是一种不能直接创建实例的类，只能作为其他类的基类。

```ts
abstract class Person {
  abstract greeting(): void; // 抽象方法

  move() {
    console.log("move");
  }
}
```

## 抽象方法

- 定义了方法的签名但没有具体实现。

- 必须在继承的子类中 实现这个方法。

- 只能存在于抽象类中。

示例：

```ts
abstract class Animal {
  abstract makeSound(): void; // 抽象方法

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}
```
