/*
    DOM [Deal with childrens]
    - children // Only Elements like [p,h1,span.....]
    - childNodes // All the thing inside the element [spaces,p,h1,span....]
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild

*/

let myDiv = document.querySelector(".div");
console.log(myDiv);
// childrens
console.log(myDiv.children);

// childNodes
console.log(myDiv.childNodes);

// firstChild
console.log(myDiv.firstChild);

// lastChild
console.log(myDiv.lastChild);


// firstElementtChild
console.log(myDiv.firstElementChild);

// lastElementtChild
console.log(myDiv.lastElementChild);
