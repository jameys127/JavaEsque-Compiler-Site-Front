## Example Program 
```
class Animal {
  init() {}
  method speak() void { println(0); }
}
class Cat extends Animal {
  init() { super(); }
  method speak() void { println(1); }
}
class Dog extends Animal {
  init() { super(); }
  method speak() void { println(2); }
}

Animal cat;
Animal dog;
cat = new Cat();
dog = new Dog();
cat.speak();
dog.speak();
```