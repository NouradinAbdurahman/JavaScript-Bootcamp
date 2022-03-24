/**
 
    Map
    - Swap Cases
    - Inverted Numbers
    - ignore Numbers
 */

let swapCases = "nouRAdDin";
console.log("Swap Cases:");
let swapCasesResult1 = swapCases.split("").map((element) =>{
    if (element === element.toLowerCase()) {
        return element.toUpperCase()
    }
    else {
        return element.toLowerCase()
    }
}).join("");
console.log(swapCasesResult1);


// Using Ternary Condition
let swapCasesResult2 = swapCases.split("").map((e) => e === e.toLowerCase() ? e.toUpperCase(): e.toLowerCase()).join("");
console.log(swapCasesResult2);
console.log("#".repeat(20));

let invertedNumbers = [1,-10,20,-3,-49,20];
console.log("Inverted Numbers:"); 

// Using Ternary Condition
let invertedNumbersResult1 = invertedNumbers.map((e) => -e );
console.log(invertedNumbersResult1);
console.log("#".repeat(20));

let ignoreNumbers = "Noura12di3n";
let ignoreNumbersResult = ignoreNumbers.split("").map((e) => isNaN(parseInt(e)) ? e: "" ).join("");
console.log(ignoreNumbersResult);