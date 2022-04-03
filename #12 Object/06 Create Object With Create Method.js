/*
    Object
    - Create Object With Create Method

*/
let user = {
    age: 20,
    double: function () {
        return this.age * 2;
    },
};
console.log(user);
console.log(user.age);
console.log(user.double());

// Lets create a copy of the user object

// first lets create a normal object using object.create
let object = Object.create({});
object.name = "Nouradin";
console.log(object.name);

// Lets create a copy of the user object
let copyobject = Object.create(user);
// now i can change the copyObject value
copyobject.age = 30;
console.log(copyobject);
console.log(copyobject.age);
console.log(copyobject.double());