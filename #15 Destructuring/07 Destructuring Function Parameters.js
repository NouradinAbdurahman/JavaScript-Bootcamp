/*
    Destructuring
    - Destructuring Function Parameters
*/

let user = {
    theName: "Nouradin",
    theAge: 21,
    theTitle: "Developer",
    theCountry: "Somalia",
    skills : {
        HTML: "HTML",
        CSS: "CSS",
        JavaScript: "JavaScript",
    },
};

// The Normal Way To extract The Data From The Object Using Function 
// function showDeails(obj) {
//     console.log(`The Name is: ${obj.theName}`);
//     console.log(`The age is: ${obj.theAge}`);
//     console.log(`The Country is: ${obj.thCountry}`);
// }
// showDeails(user);

// The Advancedn Way To Destract The Data From The Object Using Destructuring and also we can rename the object key
 
function showDeails({theName: name, theAge: age, theTitle: title, theCountry: country} = user) {
    console.log(`The Name is: ${name}`);
    console.log(`The age is: ${age}`);
    console.log(`The Country is: ${title}`);
    console.log(`The Title is: ${country}`);
}
showDeails(user);