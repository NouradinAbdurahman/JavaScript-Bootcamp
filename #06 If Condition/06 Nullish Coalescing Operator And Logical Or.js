/*
    - Logical Operator
        Null + Undefined + Any Falsy Value
    - Nullish Coalescing Operator
        Null  + Undefined
*/

let price1 = 100;
console.log(price1); // Normal 

// Logical Operator
let price2 = ""; // Empty Value
let price3 = 0; // Zero Value
let price4 = null; // Null Value
let price5 = undefined; // Undefined Value

console.log("Logical Operator");
console.log("");

console.log(`This is Empty Value so the price will be: ${price2 || 100}`);
console.log(`This is Zero Value so the price will be: ${price3 || 100}`);
console.log(`This is Null Value so the price will be: ${price4 || 100}`);
console.log(`This is Undefined Value so the price will be: ${price5 || 100}`);
console.log("");

// Nullish Coalescing Operator
let price6 = ""; // Empty Value
let price7 = 0; // Zero Value
let price8 = null; // Null Value
let price9 = undefined; // Undefined Value

console.log("Nullish Coalescing Operator");
console.log("");

console.log(`This is Empty Value so the price will be: ${price2 ?? 100}`);
console.log(`This is Zero Value so the price will be: ${price3 ?? 100}`);
console.log(`This is Null Value so the price will be: ${price4 ?? 100}`);
console.log(`This is Undefined Value so the price will be: ${price5 ?? 100}`);