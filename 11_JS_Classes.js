// JS class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }

//     greet() {
//         console.log(`Hello my name is : ${this.name}`);
        
//     }
// }

// const person1 = new Person("Amrendra", 25);
// person1.greet();

// Constructor Method

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     car() {
//         console.log(`My Car Brand is: ${this.brand}`);
        
//     }
// }

// const car1 = new Car("BMW");
// car1.car();

// Inheritance with extend and super 
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(`Animal is speak ${this.name}`);
        
//     }
// }

// class Dog extends Animal {
// speak() {
//     super.speak();
//         console.log(`${this.name} barks`);
        
//     }
// }

// const dog = new Dog("Buddy");
// dog.speak();

// Getter & Setter Method

class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.height = value / this.width;

    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);
rect.area = 100;
console.log(rect.height);

