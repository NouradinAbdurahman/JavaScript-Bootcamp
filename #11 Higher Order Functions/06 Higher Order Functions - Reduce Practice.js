/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];
let check = theBiggest.reduce( (accumulator ,current) => {
  return accumulator.length > current.length ? accumulator : current;
})
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter((accumlator,current) => {
  return accumlator !== "@";
}).reduce((accumlator,current) => {
  return `${accumlator}${current}`
})
console.log(finalString);