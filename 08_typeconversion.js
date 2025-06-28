// Type conversion 
// Implicit conversion  --> + with string → converts all to string.

// -, *, / → convert to number.

// Boolean: true becomes 1, false becomes 0.

// Explicit Conversion --> 

// console.log("5" +2 );
// console.log("8" - 2);

// let num = 123;
// console.log(String(num));
// console.log((123).toString());
// console.log(true.toString());

//  Number Conversion --> number(), parseInt(), Parsefloat()

// console.log(Number(num));
// console.log(Number("123abc"));
// console.log(parseInt("123dfg"));
// console.log(parseFloat("3.141"));

//  Boolean Conversion --> boolean() , !!
// console.log(!!"Hello");
// console.log(Boolean(1));

console.log("5" * "12");
console.log(("5" + 102));

console.log("5" == 5);
console.log("5" === 5);

//  Javascript Destructuring 

// Array Destructuring 

const arr = ["banana", "Apple","Guava"]

const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

// Skipping Items 

const num  = [1, 2, 3];
const [x, , y] = num;
console.log(x,y);

// Object Destructuring 

const user = {
    name: 'sonu',
    age : 12
};

const {name ,age } = user;
console.log(name);
console.log(age);

// JS Error 

undefinedFunction();
// Error Handling 
// throw,try,catch..finally
















