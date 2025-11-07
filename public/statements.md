## Statements

**Statements** are the smallest standalone unit of execution that is possible in this language. There needs to be at least one for your program to be valid and they must all end in a semi-comon except for the statements that have brackets ('if', 'while').

## Types of statements

**Expression Statements** are expressions that end with a semi-colon.
```
5 + 6;
```

**Variable Declarations** are statements that declare a variable to be used. **Importantly**, declarations and assignments must happen on different lines.
```
int x;
```

**Assignments** are statements that assign a value to a variable that has been declared The value can be any valid expression of the declared type.
```
x = 4;
```

**While** statements are the only type of loops that currently exist in this language. It takes a coditional and then one or more statements in the brackets.
```
int x;
x = 5;
while(x < 10){
    println(x);
    x = x + 1;
}
```

**Break** statements are used to break out of a while loop early.
```
while(true){
    println("Hello");
    break;
}
```

**Return** statements are used inside method to return a value when called. The method must return the type that was specified when it was initialized.
```
method getName () String {
    return this.name;
}
```

**if/else** statements are used to conditionally run statements based on a boolean parameter. Inside the brackets must be at least one statement An optional else may be included.
```
if(x < 10){
    println("Right");
}else{
    println("Left");
}
```