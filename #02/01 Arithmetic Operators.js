/*
    Arithmetic Operators
    - Addition +
    - Subtraction -
    - Multiplication *
    - Division /
    - Exponentiation ** (ES7)
    - Modulus % (Division Remainer) 
    - increment ++ [ Post Increment++ | ++pre Increment ]
    - Dicrement -- [ Post Increment-- | --pre Increment ]
*/
// Addition +
console.log(5 + 5);

// But we can't addition number with string it will give us a string, becaouse the computer  will thing the Addition is for concatenaition two value.
console.log(10 + "Nouradin"); // 10Nouradin

// Subtraction
console.log(10 - 5);

// And also we can't Substruct number with string it will give us a "NaN" Value, 
console.log(10 - "Nouradin"); // NaN

// Multiplication
console.log(5 * 2);

// Division
console.log(20 / 2);

// Exponentiation
console.log(5 ** 2);

// Modulus (Remainder)
console.log(`The Remainder is: ${34 % 2}`); // If the value divide by 2 and the remainders is zero it means that it's even value.
console.log(`The Remainder is: ${65 % 2}`); // If the value divide by 2 and the remainders is one it means that it's odd value.


// Increment [ Post Increment++]
let a = 5;
a++
console.log(`The post increment is: ${a}`);

// Increment [ ++pre Increment ]

let b = 10;
--b;
console.log(`The pre increment is: ${b}`);


// Dicrement [ Post dicrement++]
let c = 5;
c++
console.log(`The post dicrement is: ${c}`);

// dicrement [ ++pre dicrement ]

let d = 10;
--d;
console.log(`The pre dicrement is: ${d}`);
