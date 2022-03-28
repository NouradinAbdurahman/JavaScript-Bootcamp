/*
    Object
    - Creat With New Keyword new object();
*/

// We can creat empty object with no propereties, or we can creat new object with propereties and then we can update the properties
// let useR = new Object();

let user = new Object({
    name: "Nour",
    age: 25,
});
console.log(user);
// Let's add propereties
user.name = "Nouradin";
user.age = 21;
user["country"] = "Somalia";
user["skills"] = ["HTML","CSS","JS"]
console.log(user.name);
console.log(user.age);
console.log(user.country);
console.log(user.skills);