/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/


// Map VS Filter
let mapVsFilter = [11, 20, 2, 5, 17, 10];
let MapVsFilterResult = mapVsFilter.map( (el) => {
    return el + el;
})
console.log(MapVsFilterResult);


// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter((el) => {
    return el.startsWith("A");
})
console.log(filterFriends);


// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter( (el) => {
    return el % 2 === 0;
})
console.log(evenNumbers);