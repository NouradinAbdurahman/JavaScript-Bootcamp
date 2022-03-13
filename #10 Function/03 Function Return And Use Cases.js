/*
    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed] // any code written after return method it will not show or print.
    - Interruptting 
*/

// Return
function return1(num1,num2){
    return num1 + num2
}
let result1 = return1(10,10);
console.log(result1);

// Automatic Semicolon Insertion [No Line Terminator Allowed] // any code written after return method it will not show or print.

function return2(num1, num2) {
  return num1 + num2;
  // any code written after return method it will not show or print.
  if (num1 === 0) {
    console.log(`Not a valid Number`);
  }
}
let result2 = return1(10, 10);
console.log(result2);

// Interruptting
function generate(start, end) {
    for(let i = start; i <= end; i++){
        console.log(i)
        if (i === 15){
            return `Interruptting`;
        }
    }
}
generate(10,20);