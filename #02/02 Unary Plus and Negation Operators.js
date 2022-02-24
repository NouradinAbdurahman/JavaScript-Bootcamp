/*
    Unary Plus and Negation Operators
    - Unary Plus [Returns Number if its not a number]
    - Unary Negation [Returns Number if its not a number + Negats it]
    Tests
    - Normal Number
    - String Number
    - String Negative Number 
    - String Text
    - Float
    - Hexadecimal Numaral System => 0xff = 255 
    - null
    - false
    - true
*/

//  Unary plus
console.log("Unary Plus");
console.log(`Normal Number: ${+100}`);
console.log(`String Number: ${+"100"}`);
console.log(`String Negative Number: ${+"-100"}`);
console.log(`String Text: ${+"Nouradin"}`);
console.log(`Hexadecimal Numaral System: ${+0xff}`);
console.log(`null value: ${+100}`);
console.log(`false value: ${+100}`);
console.log(`true value: ${+100}`);

console.log("");
console.log("");

// negation operators
console.log("Negation Operators");
console.log(`Normal Number: ${-100}`);
console.log(`String Number: ${-"100"}`);
console.log(`String Negative Number: ${-"-100"}`);
console.log(`String Text: ${-"Nouradin"}`);
console.log(`Hexadecimal Numaral System: ${-0xff}`);
console.log(`null value: ${-100}`);
console.log(`false value: ${-100}`);
console.log(`true value: ${-100}`);
