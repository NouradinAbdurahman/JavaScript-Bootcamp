/*
   If Condition
    - Control Flow
    - if
    - else if
    - else
    if (Condition) {
        // Block of code
    }
*/ 


let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Somalia"

if (discount === true) {
    price -= discountAmount; // price = price - discountAAmount
} else if (country === "Somalia") {
  price -= 50; // price = price - 50
} else if (country === "Qatar") {
  price -= 30; // price = price - 30
} else {
    price -= 10;
}
console.log(price);