/*
    String Methods Part 3

    - substring( start [Mandatory], End [Opt] Not including End)
      --- If Start > End = Swap
      --- If Start < 0 = It start from 0
      --- Use length to get last character 
    - substr (Start [Mandatory] , Characters to extract (means how many character do want like 2,5,86,54,...))
      --- If start value >= Length = " "
      --- Negative start from End
    - includes(Value [Mandatory], Start [Opt] · Default e) [ES6]
    - startsWith(Value [Mandatory], Start [Opt]·Default 0) [ES6]
    - endsWith(Value [Mandatory], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero web school";
console.log(`The length of " a " variable is: ${a.length}`);

// substring
console.log(`Substring without putting value: ${a.substring()}`);
console.log(`Substring with putting value: ${a.substring(2)}`);

// If Start > End = Swap
console.log(`If Start value > End value = Swap: ${a.substring(6,2)}`);

// If Start < 0 = It start from 0
console.log(`If Start value < 0 = It start from 0:  ${a.substring(-6, 7)}`);

// Use length to get last character 
console.log(`Use length to get last character : ${a.substring(a.length -1)}`);
console.log(`Use length to get last characters : ${a.substring(a.length -0 , a.length -6)}`);



// Substr
console.log(`substr without putting value: ${a.substr()}`);
console.log(`substr with putting value without Characters to extract: ${a.substr(7)}`);

// If start value >= Length = " "
console.log(`If start value >= Length = " ": ${a.substr(17)}`);

// Negative start from End
console.log(`Negative start from End without Characters to extract: ${a.substr(-10)}`);
console.log(`Negative start from End with Characters to extract: ${a.substr(-10,4)}`);

// includes
console.log(`the " a " variable includes this, but without Ending value: ${a.includes("E")}`);
console.log(`the " a " variable includes this, but without Ending value: ${a.includes("E",1)}`);

// startsWith
console.log(`the " a " variable startsWith, but without Ending value: ${a.startsWith("E")}`);
console.log(`the " a " variable startsWith, but with Ending value: ${a.startsWith("E",0)}`);


// endsWith
console.log(`the " a " variable endsWith, but without Ending value: ${a.endsWith("l")}`);
console.log(`the " a " variable endsWith, but with Ending value: ${a.endsWith("0",5)}`);