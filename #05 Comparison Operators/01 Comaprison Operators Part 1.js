/*
    Comparison Operators Part 1
    -  == Equel
    - != Not Equel

    -  === Identical
    - !== Not identical

    - > Larger than
    - >= Larger than or Equel

    - < Smaller than
    - <= Smaller than or Equel
*/

console.log(`Is 10 Equel " 10 " : ${10 == "10"}`) // Compare value only.


console.log(`Is 10 Not Equel to " 10 " : ${10 != "10"}`) // Compare value only.


console.log(`Is 10 Equel Equel  " 10 " : ${10 === "10"}`) // Compare value and the type.

console.log(`Is 10 Not Equel Equel  " 10 " : ${10 !== "10"}`) // Compare value and the type.



 console.log(`Is 10 Larger than 10: ${10 > 10}`);
 console.log(`Is 10 Larger than 10 or Equel to 10 : ${10 >= 10}`);


 console.log(`Is 10 Smaller than 10: ${10 < 10}`);
 console.log(`Is 10 Smaller than 10 or Equel to 10 : ${10 <= 10}`);


// Interview Question
console.log("Nouradin" === "Azzuz"); // How can we make this question true

console.log(typeof"Nouradin" === typeof"Azzuz"); // This is the answer 