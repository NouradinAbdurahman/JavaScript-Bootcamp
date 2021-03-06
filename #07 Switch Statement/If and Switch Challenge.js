/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// Convert previouse code in to If statement

switch (job) {
    case "Manager":
        salary = 800;
        console.log(`The Manager's salary is: ${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 600;
        console.log(`The IT and Support salary is: ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 700;
        console.log(`The Developer and Designer salary is: ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(salary);
}

console.log("###################################################################################################################");
console.log(" ");
/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}


// Convert previouse code in to Switch Statement
if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}