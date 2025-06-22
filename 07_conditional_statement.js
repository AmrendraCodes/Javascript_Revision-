// Conditional statement : (if,else,else if, switch)
let score = 20;
 
if (score < 20) {
    console.log("student is poor");
    
}
else {
    console.log("student is brilliant");
    
}
if (score >= 90) {
    console.log("A");
    
} else if (score >= 80) {
    console.log("B");
    
} else {
    console.log("C or below");
    
}

//  JS Switch ()

let fruit = "Guava";

switch (fruit) {
  case "apple":
    console.log("Apples are $1.50/kg");
    break;
  case "banana":
    console.log("Bananas are $0.99/kg");
    break;
  default:
    console.log("Fruit not available");
}

//  JS Loops
// Loops can execute a block of code a number of times.
// Type of Loops 
// for

// while

// do...while

// for...in

// for...of

for( let i = 0; i<= 50;i++)  {
    console.log("count: ",i);
}

let i = 0;
while (i < 5) {
    console.log("count" , i);
    i++;
    
    
}