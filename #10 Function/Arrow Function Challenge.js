/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names1 = function (...name) {
  // Parameter ?
  return `[${name.join("],[")}] => Done!`;
};
console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim",));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// [2] Convert To Arrow Function
let names2 = (...name) => `[${name.join("],[")}] => Done!`;
console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim",));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !



/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers1 = [20, 50, 10, 60];
let calc1 = (one, two, ...myNumbers1) => one + two + Number(myNumbers1);
console.log(calc1(10, myNumbers1[0], myNumbers1[1])); // 80

// Convert To Normal Function
let myNumbers2 = [20, 50, 10, 60];
function calc2 (one , two , ...myNumbers2){
  return one +two + Number(myNumbers2);
}
console.log(calc2(10, myNumbers2[0], myNumbers2[1])); // 80
