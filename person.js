// MODULE WRAPPER FUNCTION
// (function (exports, require, module, __filename, __dirname){
    // ALL OF THE BELOW CODE IS ACTUALLY PRESENT HERE 
// })

// console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;