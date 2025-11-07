## Getting Started

**JavaEsque** is a very simple language, but it has some strict rules when it comes to the order in which you write classes or statements. A valid JavaEsque program must contain *at least* one statement or it will not compile. When writing out more complicated programs than just one statement, all classes must be created **before** all statements. Creating classes, then statements, then more classes will result in a compile time error. Also, a valid statement will always end with a semi-colon, exactly like plain old Java.

So the TLDR:
- Must have at least one statement
- All Classes must be written before any statements
- All statements must end with a semi-colon
- Trying to compile an empty file or a program with a class decleration after a statement will result in a compile time error

## Easy Program

The easiest program to get started is a basic 'Hello, World!' To print to the console, you would use a println statement:
```
println("Hello, World!");
```