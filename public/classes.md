## Classes

This is an object oriented language, so classes and objects are a given. Classes have the same strict order in declaring its components just like the rest of the language. A class contains **instance variables**, a **contructor**, and then any number of **methods**, in that order. The constructor is required in all classes but the instance variables and methods are optional. Classes can also inherit from a parent class using the key word **extend**. 

```
class Hello {
    init () {}
    method printHello () void {
        println("Hello");
    }
}
```

**Instance variables** are always referred to using keyword **this** whenever it is being called within the class. Other than that they are regular varaible declerations that get assigned a value in the constructor.

```
class Car {
    int year;
    init (int year){
        this.year = year;
    }
    method printYear () void {
        println(this.year);
    } 
}
```

**Constructors** use the keyword **init** to assign values to the instance variables from the input parameters. When the class extends a parent class, you must use the keyword **super()** to properly fulfill the input requirements of the parent class.

```
class Ferrari extends Car {
    String model;
    init(String model, int year){
        super(year);
        this.model = model;
    }
    method printYearAndModel () void {
        println(this.model);
        println(this.year);
    }
}
```

**Methods**, as seen above, use key word **method** to start. They have a name, input values, and a return type. If a non-void return type is given, you must have a valid return statement or there will be a compile time error. This language also has functionality for method overriding (See *Example Program* for an example).
```
method getValue (int x) int {
    return x;
}
```

There are not standalone functions in this language. All functions would have to be methods that are attached to a class. Here is how you would create an object and call a method.
```
Car car;
car = new Car(1958);
car.printYear();
```