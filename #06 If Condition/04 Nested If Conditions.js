/*
    Nasted If Conditions
    - 

*/


let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Somalia";
let student = true;

if (discount === true) {
  price -= discountAmount; // price = price - discountAAmount
} else if (country === "Somalia") {
    if (student === true ) {
      price -= discountAmount + 30; // price = price - discountAAmount + 30
    } else {
        price -= discountAmount;
    }
} else if (country === "Qatar") {
  price -= 30; // price = price - 30
} else {
  price -= 10;
}
console.log(price);