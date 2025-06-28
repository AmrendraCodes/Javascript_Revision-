//  Synchronous
// console.log("Amrendra");
// console.log("sonu");
//  Asynchronous 

// console.log("start");
// setTimeout(() => {
//     console.log("Inside TimeOut");
    
// }, 1000);

// console.log("End");

// SetTimeOut & SetTimeInterval

setTimeout(() => {
    console.log("My name is Dummy JS");
    
}, 1000);

let count = 0;
 let timer = setInterval(() => {
    count++;
    console.log("count : ",count);
    if(count === 5) clearInterval(timer);
 }, 1000);
 



