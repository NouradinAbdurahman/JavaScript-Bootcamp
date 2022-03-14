/*
    Function Default Parametars
    - Default Function Parametars
    - Function Parametars Default [Undefined]
    - Old Strategies [Condition + Logical or ]
    Es6 Method
*/

function sayHello(userName = "Unknown", age = "Unknown") {
  // Old Strategies [ Condition ]
  /* 

    if (age === undefined){
        age = "Unknown";
    }

    */

    // Old Strategies [ Logical or ]
    /*
    age = age || "Unknown";
    */
  return `Hello ${userName} Your age is ${age}`;
}
console.log(sayHello("Mohamed")); 
console.log(sayHello("NOURADIN", 21));
console.log(sayHello());