/*
    Arrays Methods   [Slicing]
    - slice(Start [0pt], End [Opt] Not Including End)
    - slice() => All Array
    - If Start Is Undefined - => 0
    - Negative Count From End
    - If End Is Undefined || -> Indexes = Slice To The End Array.length
    - Return New Array
    - splice(Start- [Mand], DeleteCount [Opt] [0•NRemove], The Items To Add [Opt])
    - If Negative => Star From The End
*/

// Slice()
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());

console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);


// Splice()
let myFriends2 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends2);
console.log(myFriends2.splice(1, 2, "Sameer", "Samara"));
console.log(myFriends2);