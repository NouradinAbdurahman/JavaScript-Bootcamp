/*
    Array Methods
    - Length  
*/

// Index started from 0 [0, 1, 2, 3]
// But the length started from 1 
let myFriends = ["Azzzuz", "Mohamed", "Abdurahman", "Abdimalik"];
console.log(`My Friends Are: ${myFriends} and the Length of the Array is: ${myFriends.length}`);
myFriends[myFriends.length] = "Ahmed"
console.log(`My Friends Are: ${myFriends} and the Length of the Array is: ${myFriends.length}`);

// in case you want to update last elemrnt of the array
myFriends[myFriends.length - 1] = "Osama";
console.log(`My Friends Are: ${myFriends} and the Length of the Array is: ${myFriends.length}`);
