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


