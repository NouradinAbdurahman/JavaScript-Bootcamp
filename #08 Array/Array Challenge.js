/*
  Array Challenge
*/

let myFriends = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(myFriends.slice(0, myFriends.length - 2).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];


console.log(myFriends.slice(1,3).reverse()); // ["Elham", "Mazero"]


myFriends[myFriends.length] = "Elzero";
myFriends.splice(0 , 6); // "Elzero"
console.log(myFriends)

let x = myFriends[0][4];
let y = myFriends[0][5];
let z = x.concat(y.toUpperCase());
console.log(z); // "rO"


