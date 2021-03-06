/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",").filter((accumlator,current) => {
    // To Remove The NUmbers
    return isNaN(parseInt(accumlator));
}).map((el) => {
    // To Replace The Under Score to Empty place
    return el.replace("_"," ")
}).reduce((accumlator, current) => {
    // To Join The Words Together
    return accumlator + current;
}).slice(1,-1)
console.log(solution); // Elzero Web School
