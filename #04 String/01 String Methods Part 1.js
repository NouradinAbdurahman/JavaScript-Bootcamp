/*
    String Methods Part 1
    
    - Access with index[]
    - Access with chartAt() // character at position
    - length
    - trim() // it will remove the spaces 
    - toUpperCase() // it will return all the string to upper case
    - toLoweCase() //  it will return all the string to lower case
    - chain methods // this method means you can write all the methods in the same time one by one like = x.trim().chartAt(0)......etc.
*/

let theName = "Nouradin";
let theList = [1,2,3,4,5,6,7,8,9,10];

// Access with index[]
console.log(`The index is: ${theName[0]}`);

// Access with cartAt()
console.log(`The chartAt is: ${theName.charAt(7)}`);

// length
console.log(`The length is: ${theName.length}`);


let theTrim = "   Nouradin    Aden";
console.log(`This is without the trim method: ${theTrim}`);

// trim
console.log(`This is with the trim method: ${theTrim.trim()}`);


// toUpperCase()
console.log(`The UpperCase of thName Variables is: ${theName.toUpperCase()}`);


// toLowerCase()
console.log(`The LowerCase of thName Variables is: ${theName.toLowerCase()}`);