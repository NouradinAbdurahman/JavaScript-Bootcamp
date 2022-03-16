/*
    Anonymous Function And Practice
    - Anonymous Function
    - Calling Named Function - vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/

// Normal Functon With a name 
function calc(num1, num2) {
    return `The Addition between num1 and num2 is: ${num1 + num2}`;
}
console.log(calc(10,20));


// But Function without a name or ( Anonymous Function)

let calculator = function (num1, num2) {
    return `The Multiplication between num1 and num2 is: ${num1 * num2}`;
}
console.log(calculator(9,8 ));


// Anonymous Function Example
setTimeout ( () => {
    console.log(`Good`);
},2000);