
/* 
    Arrays Methods [Adding And · Removing]
    - unshift("", "")Add Element To The First
    - push("", "")Add Element To The End
    - shift() Remove First Element From Array
    - pop () Remove Last Element From Array
*/

let myFriends = ["Azzzuz", "Mohamed", "Abdurahman", "Abdimalik"];
console.log(`This Is The Initial Element: ${myFriends}`);

// unshift
console.log(`Add Element To The First: ${myFriends.unshift("Abd Al-Aziz")} ${myFriends}`);

// push
console.log(`Add Element To The End: ${myFriends.push("Ali")} ${myFriends}`);


// shift
console.log(`Remove First Element From Array: ${myFriends.shift()} ${myFriends}`);

// pop
console.log(`Remove Last Element From Array: ${myFriends.pop()} ${myFriends}`);