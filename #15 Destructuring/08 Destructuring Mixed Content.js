/*
    Destructuring
    - Destructuring Mixed Content
*/

const user = {
    theName: "Nouradin",
    theAge: 21,
    theRole: "Student",
    theTitle: "Developer",
    theCountry: "Somalia",
    skills: ["HTML","CSS","JavaScript"],
    addressses: {
        somalia: "Mogadishu",
        qatar: "Doha",
        turkey: "Ankara",
    },
};

// we need to extract the data from the Object usung different ways

// [1] way
let {theName, theAge, theRole, theTitle, theCountry, skills:[HTML, css,JavaScript], addressses: {somalia, qatar, turkey}} = user;
console.log(`The Name is: ${theName}`);
console.log(`The Age is: ${theAge}`);
console.log(`The Role is: ${theRole}`);
console.log(`The Title is: ${theTitle}`);
console.log(`The Country is: ${theCountry}`);
console.log(`The Skills are: ${HTML}`);
console.log(`The Skills are: ${css}`);
console.log(`The Skills are: ${JavaScript}`);
console.log(`The Addressses are: ${somalia}`);
console.log(`The Addressses are: ${qatar}`);
console.log(`The Addressses are: ${turkey}`);

console.log("#".repeat(50));
// [2] way

function showDeails({theName, theAge, theRole, theTitle, theCountry, skills:[HTML, css,JavaScript], addressses: {somalia, qatar, turkey}} = user){
    console.log(`The Name is: ${theName}`);
    console.log(`The Age is: ${theAge}`);
    console.log(`The Role is: ${theRole}`);
    console.log(`The Title is: ${theTitle}`);
    console.log(`The Country is: ${theCountry}`);
    console.log(`The Skills are: ${HTML}`);
    console.log(`The Skills are: ${css}`);
    console.log(`The Skills are: ${JavaScript}`);
    console.log(`The Addressses are: ${somalia}`);
    console.log(`The Addressses are: ${qatar}`);
    console.log(`The Addressses are: ${turkey}`);
}
showDeails(user);