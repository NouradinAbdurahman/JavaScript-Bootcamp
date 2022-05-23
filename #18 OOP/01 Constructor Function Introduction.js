/*
    Constructor Function
*/

function User(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary +1000;
};
let userOne = new User("100", "Nouraddin", 10000);
let userTwo = new User("101", "Mohamed", 9000);
let userThree = new User("102", "Ismail", 11000);

console.log(userOne.id);
console.log(userOne.username);
console.log(userOne.salary);

console.log(userTwo.id);
console.log(userTwo.username);
console.log(userTwo .salary);


console.log(userThree.id);
console.log(userThree.username);
console.log(userThree.salary);