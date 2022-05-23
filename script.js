'use strict'
// constructors always use capital letter
// arrow function will not work as a constructor function
const Person = function (firstName, birthYear) {
    console.log(this)
}

new Person('Jonas', 1991)
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
