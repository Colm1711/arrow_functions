//This class has one constructor that takes in one param which it sets this dot name to name
// and then two functions printNameArrow and printNameFunction that prints the name

class Person{
    constructor(name) {
        this.name = name
    }


printNameArrow() {
    setTimeout(() => {
        console.log('Arrow: ' + this.name)
    }, 100)
};

printNameFunction() {
    setTimeout(function() {
        console.log('Function: ' + this.name)
    }, 100)
} 

}

//this functions very differently for arrow funcions and named functions(normal vanilla)
let person = new Person('bob');
person.printNameArrow();
//These have the same global call on the this object
person.printNameFunction();
console.log(this.name)