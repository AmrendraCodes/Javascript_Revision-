//  JS Function 
const var1 = myFunction(25, 25 );

function myFunction(a,b) {
    return a*b;

}
// console.log(var1);

// Practice 1 ( Add a number)

function add_number(a,b) {
    return a + b;

}
// console.log(add_number(2,3));

// Practice 2(check even or odd)

function check_even_odd(num) {
    if(num%2 == 0) {
       return "value is even"
    } else {
        return "value is odd"
    }
}

// console.log(check_even_odd(2));
// console.log(check_even_odd(3));

// JS Object 
// key: value --> creating an object 

// creating an Object 

// const employee_details = {
//     first_name : "sonu",
//     last_name : "kumar",
//     emp_code: 123

// };
// // console.log(employee_details.first_name);
// // console.log(employee_details.emp_code);

const car = new Object();
car.name = "BMW";
car.series = 123;

// console.log(car);

// Practice 1 (Create an object and access their properties)

// const student = {
//     name: "sudhanshu",
//     age : 25,
//     grade : "A"
// };

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.grade = "B+");

// Add method to constructor 

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`I am ${this.name}`);

    }
}
 const user = new Person("sneha", 22);

 user.greet();













