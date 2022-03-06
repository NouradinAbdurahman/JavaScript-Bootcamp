/*
    Loop
    - Looping On Sequences
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
console.log(" ");


// Using For Loop to show the array element without repeating the code 
for (let i = 0; i < myFriends.length; i++) {
    console.log(i ,myFriends[i]); 
}
console.log("");

let mixed = ["Ahmed", "Sayed", 1,2,3,"Ali", "Osama", "Gamal",4,5, "Ameer"];
let onlyNumes = [];
for (let i = 0; i < mixed.length; i++) {
    // Print only Names
    if (typeof mixed[i] === "string") {
        onlyNumes.push(mixed[i]);
    }
}
console.log(onlyNumes);