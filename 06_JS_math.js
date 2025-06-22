// Math is a just a builtin object and function and it is not a constructor . 
// console.log(Math.PI);
// console.log(Math.E);

// Rounding and absolute value 
// console.log(Math.round(3.6));

// Min,Max,Random
// console.log(Math.min(1, -2, 3,15, -87))
// console.log(Math.max(-87, 54,94,125));

function RandInt(min, max) {
    return Math.floor(Math.random()*(max-min +1)) +min
}

console.log(RandInt(9,15));

// Power & Roots
(Math.pow(2,3));

console.log(Math.sqrt(25));

console.log(Math.log(Math.E));

//  Print a Fibonacci series 

function printfibonacci(n) {
    let a = 0, b= 1, c;
    console.log(a);
    console.log(b);

    for(i =0; i<n; i++) {
        c = a+b;
        console.log(c);
        a=b;
        b=c;   
    }
    
    
}

printfibonacci(5);

// JS Booleans
// A JavaScript Boolean represents one of two values: true or false.
let x = 5;
let y = 10

console.log(x === y);
console.log(x != y);
console.log(x && y);
 
// Conditional Operator

function Age(age) {
    return age < 18 ? "too young" : "too old"
}
console.log(Age(25));

//  Add two number 
 function add_number(a , b) {
    return a+b;
 }
 console.log(add_number(5,2));
 







