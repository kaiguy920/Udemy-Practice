'use strict'
// constructors always use capital letter
// arrow function will not work as a constructor function
const Person = function (firstName, birthYear) {
    // instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // NEVER do this (create method in constructor function)
    // each object would then carry a copy of the function
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear)
    // }
    // instead do prototypal inheritance
}

const jonas = new Person('Jonas', 1991)
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack);

// returns true 
console.log(jonas instanceof Person)
// console.log(jay instanceof Person)

// PROTOTYPES
// here's where you can assign functions; only makes one copy

Person.prototype.calcAge = function () {
    console.log(`${this.firstName} is`, 2037 - this.birthYear, "years old")
}

jonas.calcAge()
matilda.calcAge()