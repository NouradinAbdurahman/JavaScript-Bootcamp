/*
    Loop
    - while
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;
while (index < products.length) {
    console.log([index + 1] ,products[index]);
    index++;
}
console.log("#".repeat(50));


// We will use the break and continue methods with while
let i = 0;
while (i < products.length) {
    console.log([i], products[i]);
    if (i === 3) {
        break
    }
    i++;
}