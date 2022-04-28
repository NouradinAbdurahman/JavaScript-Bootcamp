/*
    Destructuring
    - Destructuring Objects
*/
let user = {
    theName: "Nouradin",
    theAge: 21,
    theTitle: "Developer",
    theCountry: "Somalia",
};

// The Normal way to extract the data from the object
console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

// Or this way
// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// But how can we extract the data from the object using Destructuring way
let {theName,theAge,theTitle} = user;
console.log(theName);
console.log(theAge);
console.log(theTitle);

// or this way 
({ theName, theAge, theCountry } = user);
console.log(theName);
console.log(theAge);
console.log(theCountry);
