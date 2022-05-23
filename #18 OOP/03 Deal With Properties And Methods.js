/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
    // Properties
  constructor(id, username, salary) {
    this.id = id;
    this.username = username || "Unknown";
    this.salary = salary < 5000 ? salary + 500 : salary;
    this.msg = function () {
        return `Hello ${this.username}, Your Salary is ${this.salary}`
    };
  };
  // Methods
  writeMsg () {
      return `Hello ${this.username}, Your Salary is ${this.salary}`;
  };
};

let userOne = new User(100, "Elzero", 4500);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);
console.log(userOne.id);
console.log(userOne.username);
console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.writeMsg());
console.log(userOne.msg); // Native Code
console.log(userOne.writeMsg); // Native Code