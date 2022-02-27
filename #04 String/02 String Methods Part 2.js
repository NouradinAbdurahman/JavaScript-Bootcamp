/*
    String Methods Part 2
    
    - indexOf(value [you Must write the value you are looking at ] , Start [this is optinal it will start from zero automatically] 0 )
    - lastIndexOf(value [you Must write the value you are looking at ] , Start [this is optinal it will start from zero automatically, but opisite waye])
    - slice(value [you Must write the value you are looking at ] , End [this is optinal], but Not include the end)
    - repeat() ==> you can repeat things how many times do you need to repeat it.
    - split(separoter [Optinal], Limit [Optinal]) ==> in this method is gonna seperate everything and put it in to an array 

*/

let desc = "Elzero Web School";

// indexOf
console.log(`the index of " Web " is: ${desc.indexOf("Web")}`); // this is without giving started point.
console.log(`the index of " Web " is: ${desc.indexOf("Web",5)}`); // this is with giving started point.

// lastIndexOf()
console.log(`the lastIndexOf of " Web " is: ${desc.lastIndexOf("Web")}`); // it's look like is like using indexOf method  but this will start looking the word from the end not in the begining.

console.log(`the lastIndexOf of " Web " is: ${desc.lastIndexOf("Web",8)}`); // this is with giving started point.


// slice()
console.log(`the started slice is from 2: ${desc.slice(2)}`); // this is without the ending point.
console.log(`the started slice is from 0 to 6 : ${desc.slice(0,6)}`); // this is with the ending point.

// and also it can take negative value 
console.log(`the started slice but negative number is  from -2 to -5 : ${desc.slice(-2,-5)}`);


// repeat()
console.log(`the repeated time of the desc variables is: ${desc.repeat(5)}`);


// split()
console.log(`the split of desc variables is: ${desc.split()}`); // this will return the desc variables on an array

console.log(`the split of desc variables is: ${desc.split("")}`); // this will return the desc variables on an array and everything separoted into one pieces.
console.log(`the split of desc variables is: ${desc.split(",")}`); 
console.log(`the split of desc variables is: ${desc.split(" ")}`); 

