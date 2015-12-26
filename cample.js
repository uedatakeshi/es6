"use strict";

var plus = (a, b) => a + b;

console.log(plus(1, 2));

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }
}

var bob = new Person("Bob");
bob.greet();
