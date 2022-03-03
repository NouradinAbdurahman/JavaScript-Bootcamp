/*
    Arrays
    - Create Arrays [two Methods] new array () +  []
    - Accsess Arrays Element
    - Nested Arrays
    - Change Arrays Elements
    - Check for Array Array.isArray(arr);
*/

let myFriends = ["Azzzuz", "Mohamed","Abdurahman","Abdimalik"];

// Accsess Arrays Element
console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[1]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`Hello ${myFriends[3]}`);

// or we can access the array and access inside the array

console.log(`The first letter of element: ${myFriends[0][1]}`);


// Nested Arrays
let myFriends2 = ["Azzzuz", "Mohamed", "Abdurahman", "Abdimalik",["Azzzuz", "Mohamed", "Abdurahman", "Abdimalik"]];


// Accsessing Nested Arrays Element
console.log(`The first letter of Nested Arrays Element: ${myFriends2[4][1][0]}`);


// Change Arrays Elements
console.log(`Before Changing the array element: ${myFriends}`);
myFriends[0] = "Abdulaziz";
console.log(`After Changing the array element: ${myFriends}`);


// Check for Array Array.isArray(arr);

console.log(`Check for Array Array.isArray(myFriends); ${Array.isArray(myFriends)}`);