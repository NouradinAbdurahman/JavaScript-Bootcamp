/*
    Arrays Methods [Joining]
    - concat(array, array) => Return A New Array
    - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"]; 

// Concat()
let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]); // I can concat Variables and inside the concat i can add a new string  and a new array 
console.log(allFriends);

// Join ()

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());
console.log(allFriends);