/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/

// Using static way 
function calc1(num1,num2,num3){
    return num1 + num2 + num3;
}
console.log(calc1(12,20,30));


// Using Rest Parametars
function calc2(...numbers) {

    // if i want to print the sum of an array 
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(`[ ${i} ] ${numbers[i]}`)
        result += numbers[i];
    }
    return `Final result is ${result}`
}
console.log(calc2(10,20,21,33,43,66,79));