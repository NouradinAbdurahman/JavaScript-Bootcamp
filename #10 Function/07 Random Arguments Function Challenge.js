/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
let name,
    age,
    status;
function showDetails(a,b,c) {
    let info = [a,b,c];
    for (let i =0; i < 3; i++) {
        if (typeof info[i] === "string") {
            name = info[i]
        } 
        if (typeof info[i] === "number") {
          age = info[i];
        }
        if (info[i] === true) {
          status = "Available";
        } if (info[i] === false) {
          status = "Not Available";
        }
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status} For Hire`);
}

showDetails("Nouradin", 21, true); // "Hello Nouradin, Your Age Is 21, You Are Available For Hire"
showDetails(21, "Nouradin", true); // "Hello Nouradin, Your Age Is 21, You Are Available For Hire"
showDetails(true, 21, "Nouradin"); // "Hello Nouradin, Your Age Is 21, You Are Available For Hire"
showDetails(false, "Nouradin", 21); // "Hello Nouradin, Your Age Is 21, You Are Not Available For Hire"
