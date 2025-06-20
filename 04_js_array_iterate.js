// For Loop

const num = [12, 13, 14, 15];
for (let i = 0; i < num.length; i++) {
//   console.log(`Index ${i} : ${num[i]}`);
 
}

//  For Each Loop Examples :

const week = ["sunday", "Monday","Tuesday","Thrusday"];

week.forEach(function(weeks) {
    console.log(weeks);
    
})

// Map()
const double = num.map((num) => {
    return num*2;
})

console.log(double);
console.log(num);



