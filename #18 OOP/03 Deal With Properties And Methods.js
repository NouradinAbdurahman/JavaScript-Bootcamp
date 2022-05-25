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


class UserTwo {
    constructor (id, fName, lName, age, country, adresses, jobTitle, salary){
        this.id = id;
        this.fName = fName || "Unknown";
        this.lName = lName || "Unknown";
        this.age = age;
        this.country = country || "Unknown";
        this.adresses = adresses;
        this.jobTitle = jobTitle;
        this.salary = salary < 5000 ? salary + 1000: salary;
        this.msg = () => {
            return `Hello ${this.fName} ${this.lName} your age is ${this.age}`
        };
    };
    writeMsg () {
        return ``
    }
};
let user1 = new UserTwo ("101", "Nouraddin", "Aden", 21, "Somlia", {
    somlia: "Somlia",
    qatar: "Qatar",
    turkey: "Ankara",
},"Software Developer" , 10000);

console.log(user1.id);
console.log(user1.fName);
console.log(user1.lName);
console.log(user1.age);
console.log(user1.country);
console.log(user1.jobTitle);
console.log(user1.adresses);
console.log(user1.salary);
console.log(user1.msg());
console.log(user1.writeMsg());
