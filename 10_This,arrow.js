// This Keyword 
console.log(this);
// using Object 

const person = {
    name : "Shri Krishna",
    age  : 123,
    greet : function () {
        console.log("Hi!!" + this.name);
        
    }
};
person.greet();

//  Doubling of a Number

function double(x) {
    return x * 2
}

const Arrowdouble = (x) => x*2;
console.log(Arrowdouble(5));


