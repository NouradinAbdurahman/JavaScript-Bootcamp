/*
    Return Nested Function
    - Function Inside Function
    - Return Function
*/
 
// Example 1
function sayMessage(fname, lname) {
    let message = `Hello`;
    // Nasted Function
    function concatMsg() {
        message = `${message} ${fname} ${lname}`
    }
    concatMsg();
    return message;
}
console.log(sayMessage("Nouraddin","Aden"));


// Example 2
function sayMessage(fname, lname) {
    let message = `Hello`;
    // Nasted Function
    function concatMsg() {
        return `${message} ${fname} ${lname}`
    }
    return concatMsg();
}
console.log(sayMessage("Abdulaziz","Mohamed"));



// Example 3
function sayMessage(fname, lname) {
    let message = `Hello`;
    // Nasted Function
    function concatMsg() {
        function getFullName() {
            return `${fname} ${lname}`
        }
        return `${message} ${getFullName()}`
    }
    return concatMsg();
}
console.log(sayMessage("Mohamed","El-Awadi"));