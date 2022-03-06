/*
    Loop Control
    - Break
    - Continue 
*/


let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < products.length; i++) {
    // If we want to print only the three elements of the array
    console.log(products[i]);
    if (products[i] === "Pen") {
        break;
    }
}

let mixed = ["Keyboard",1,2, "Mouse", 3,4,5, "Pen", "Pad", "Monitor",6,];
for (let i = 0; i < products.length; i++) {
    // If we want to remove numbers or the string from the array and to print the rest of the array without the numbers or the string
    if (typeof mixed[i] === "number") {
        continue;
    }
    console.log(mixed[i])
}