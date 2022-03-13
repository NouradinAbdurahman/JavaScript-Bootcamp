/*
    Loop
    - Do While
*/
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;
while (index < products.length) {
  console.log([index + 1], products[index]);
  index++;
}

// Do Method it will print the first value automatic and then it will check the while loop 
do {
    console.log(index);
    index++;
} while (false);

console.log(index);