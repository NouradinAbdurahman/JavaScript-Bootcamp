/*
    Arrow Function Syntax
    - Regular VS Arrow [Parametar + No Parametar]
    - Multiple Lines
*/

// Regular Function
let print = function () {
    return `Using Regular Function: ${10}`;
}
console.log(print());

// Arrow Function with one line of code
let arrowFunction1 = () => `Using Arrow Function With one line of code: ${500}`;
console.log(arrowFunction1());



// Arrow Function with one line of code
let arrowFunction2 = (num1,num2) => `Using Arrow Function With one line of code: ${num1 + num2}`;
console.log(arrowFunction2(10,10));




// Arrow Function with Multiple lines
let arrowFunction3 = (fName, Lname) => {
    let message = `Hello`;
    function concatMesg() {
        function getFullName() {
            return `${fName} ${Lname}`
        }
        return `${message} ${getFullName()}`
    }
    return concatMesg();
}
console.log(arrowFunction3("NOURADDIN","ADEN"));