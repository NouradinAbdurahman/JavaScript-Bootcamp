/*
    Filter
    - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence.split(" ").filter( (element) => {
    return element.length <= 4;
})
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let ignoreNumbersResult = ignoreNumbers.split("").filter( (el) => {
    return isNaN(parseInt(el));
}).join("")
console.log(ignoreNumbersResult);

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let mixedContent = mix.split("").filter((ele) => {
    return parseInt(ele)
}).map((element) => {
    return element * element
}).join("")
console.log(mixedContent)