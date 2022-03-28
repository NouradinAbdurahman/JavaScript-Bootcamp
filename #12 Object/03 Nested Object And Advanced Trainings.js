/*
  Object
  - Nested Object And Trainings
*/

let user = {
    fName: "Nouraddin",
    middleName: "Abdurahman",
    lName: "Aden",
    age: 21,
    country: "Somalia",
    skills : ["HTML","CSS","JS"],
    available: false,
    addresses: {
        somalia: "Mogadishu",
        qatar: "Doha",
        turkey: {
            addresses1: "Ankara",
            addresses2: "Stanbul",
        },
    },
    checkAvailable: () => {
        if (user.available === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
};
console.table(user);
console.log(`First Name: ${user.fName}`);
console.log(`Middle Name: ${user.middleName}`);
console.log(`Last Name: ${user.lName}`);
console.log(`Age : ${user.age}`);
console.log(`Country : ${user.country}`);
console.table(`Skills: ${user.skills}`);
console.log(`Somalia Address : ${user.addresses.somalia}`);
console.log(`Qatar Address : ${user.addresses.qatar}`);
console.log(`Turkey Address : ${user.addresses.turkey.addresses1}`);
console.log(`Turkey Address : ${user.addresses.turkey.addresses2}`);
console.log(`Is He Available For Work ? ${user.checkAvailable()}`);
console.log(" ");

// Accessing with bracket Notation
console.log("// Accessing with bracket Notation");
console.log(" ");
console.log(`First Name: ${user["fName"]}`);
console.log(`Middle Name: ${user["middleName"]}`);
console.log(`Last Name: ${user["lastName"]}`);
console.log(`Age : ${user["age"]}`);
console.log(`Country : ${user["country"]}`);
