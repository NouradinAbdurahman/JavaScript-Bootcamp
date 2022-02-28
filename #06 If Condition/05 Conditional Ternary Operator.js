/*
    Conditional Ternary Operator

*/

let theName = "Nouradin";
let theGender = "Male";
let theAge = 21;

if (theName === "Nouradin") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Conditional Ternary Operator
let result = theName === "Nouradin" ? "Mr" : "Mrs";
console.log(result); 

// Or 
console.log(result = theName === "Nouradin" ? "Mr" : "Mrs");

console.log(`Hello ${result} ${theName}`);


// Nasted if  Using Conditional Ternary
let result1 = theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 to 60") : theAge > 60 ? console.log("Larger Than 60") : console.log("Unknown");
