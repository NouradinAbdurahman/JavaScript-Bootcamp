/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
let solution1 = a < 10 ? 10 : a >= 10 && a <= 40 ? "10 TO 40" : a > 40 ? "Larger than 40" : "Unknown";
console.log(`Solution 1: ${solution1}`);

let st = "Elzero Web School";


if((st.length * 2).toString() === "34") {
    console.log("Solution 2: Good");
}

// Elzero Web School
if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Solution 3: Good");
}


// W Position May Change
if (st.length !== "string") {
  console.log("Solution 4: Good");
}

if (typeof st.length === "number") {
  console.log("Solution 5: Good");
}

if (st.slice("E",6).repeat(2) === "ElzeroElzero") {
  console.log("Solution 6: Good");
}
