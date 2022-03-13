/*
    Function Advanced Examples
*/

function sayHello2(userName, age, country) {
  if (age < 20) {
    console.log("App is not suitable for you")
  } else {
      console.log(`Hello ${userName}, Your Age is ${age}, You're from ${country}`);
  }
}
sayHello2("ABDULAZIZ", 19,"Palestine");
sayHello2("ABDURAHMAN", 22, "Somalia");
sayHello2("MOHAMED", 18, "Egypt");


// More Advanced Function Example
function generateYears(start, end, exclude) {
    for(let i = start; i <= end; i++) {
        if (i === exclude){
            continue
        }
        console.log(i)
    }
}
generateYears(2000,2022,2020);
