/*
    String Challenge
    - All Solutions Must Be In One Chain
    - You Can Use Concatenate

*/

let a = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8·H
console.log(a.slice(13,14).toUpperCase().repeat(8)); // HHHHHHHH

// Return·Array
console.log(a.split(" " ,1)); // ·[Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,11)); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase() + a.substr(1,a.length - 2).toUpperCase() + a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl


console.log("################################################################################################################");
console.log(" ");
console.log(" ");


console.log(" All the solution in one chain");
//  All the solution in one chain

console.log(`solution One = ${a.charAt(2).toUpperCase() + a.slice(3, 6)}, solution Two =  ${a.slice(13,14).toUpperCase().repeat(8)}, solution Three =  ${a.split(" " ,1)}, solution Four = ${(a.substr(0,11))}, solution Five =  ${a.charAt(0).toLowerCase() + a.substr(1,a.length - 2).toUpperCase() + a.charAt(a.length-1).toLowerCase()}`);