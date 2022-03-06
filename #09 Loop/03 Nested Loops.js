/*
    Lopp
    - Nested Loops
*/

let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];
let colors = ["Red","Green","Blue"];
let models = [2020, 2021, 2022];

// Looping Using Nated Loops
for (let i = 0; i < products.length; i ++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log(" ");
    console.log("  Colors:");
    for (let j = 0; j < colors.length; j++) {
        console.log(`    . ${colors[j]}`);
    }
    console.log(" ");
    console.log("  Models:");
   for (let k = 0; k < models.length; k++) {
        console.log(`    . ${models[k]}`)
    }
    console.log("#".repeat(15));
}