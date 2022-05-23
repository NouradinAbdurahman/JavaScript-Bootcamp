/*
  Constructor Function
  - New Syntax
*/

class User {
    constructor(id, username, salary) {
         this.i = id;
         this.u = username;
         this.s = salary + 1000;
    }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne instanceof User);
console.log( userThree.constructor === User);
