// Number Challenge
let number1 = 1_00;
let number2 = 2_00.5;
let number3 = 1e2;
let number4 = 2.4;

// Find Smallest Number in All Variables And Return· Integer
console.log(`Find Smallest Number in All Variables And Return Integer: ${Math.trunc(Math.min(number1, number2, number3, number4))}`);


// Get Integer. "2" From - number4 - Variable -With 3 Methods
console.log(Math.round(number4));
console.log(Math.trunc(number4));
console.log(Math.floor(number4));

// Use Variables number2  + number4  To Get This Values
console.log(`${number2 / number4 / number4 + number2 / number4 / number4 - number4.toString()}`); // 66.67 => · String
console.log(Math.trunc(number2 / number4 / number4 + number2 / number4 / number4 - number4)); // 67 => Number