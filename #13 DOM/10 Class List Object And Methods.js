/*
    DOM [Class List]
    - classList
    - length
    - contains
    - item(index)
    - add
    - remove
    - toggle // is gonna add the class that you added  and removed if the element has the class (add and remove)
*/
let element = document.getElementById("mydiv");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.length);

// contains()
console.log(element.classList.contains("three"));
console.log(element.classList.contains("two"));

// item(index)
console.log(element.classList.item("0"));
console.log(element.classList.item("2"));
console.log(element.classList.item("4")); // Because the index started from zero not from one

// add()
element.onclick = () => {
    element.classList.add("add-one", "add-two")
};

// remove()
element.onclick = () => {
    element.classList.add("one", "add-two")
};

// toggle()
 element.onclick = () => {
   element.classList.toggle("show");
 };