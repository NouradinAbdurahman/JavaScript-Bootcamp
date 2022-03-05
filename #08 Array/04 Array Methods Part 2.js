 /*
    Arrays Methods [Search]
    - indexof(Search Element, From-Index [Opt]) // it will start looking the element from left to right
    - lastIndexOf(Search Element, From Index · [Opt])  //but this  it will start looking the element from right to left
    - includes(valueToFind, fromIndex [Opt]) · [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends);

// indexof
console.log(`Index Of Ahmed without starting point is: ${myFriends.indexOf("Ahmed")}`); // it will get the first element of Ahmed even is there alot of Ahmed value it will get you the first one only.

console.log(`Index Of Ahmed with starting point is: ${myFriends.indexOf("Ahmed", 2)}`); // it will get the other element of Ahmed


// lastIndexOf
console.log(`Last index Of Ahmed without starting point is: ${myFriends.lastIndexOf("Ahmed")}`);
console.log(`Last index Of Ahmed with starting point is: ${myFriends.lastIndexOf("Ahmed", -2)}`);