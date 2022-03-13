/*
    Function
    - What Is Function ?
    - User-Defined vs Built In
    - Syntax + Basic Usage
    - Example From - Real Life
    - Parameter + Argument
    - Practical Example
*/

// Function Built in
console.log(typeof console.log);

// User - Defined
let fname = "NOURADDIN";
let lname = "ADEN";
function sayHello1() {
    console.log(`Hello ${fname} ${lname}`)
}
sayHello1();

console.log("#".repeat(20))

function sayHello2(userName) {
    console.log(`Hello ${userName}`)
}
sayHello2("ABDULAZIZ");
sayHello2("ABDURAHMAN");
sayHello2("MOHAMED");