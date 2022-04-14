/*
    DOM [Cloning]
    - cloneNode(Deep) // if wee need to clone this elemnt with his siblings we should right true or false if we need only the elemnt without his siblings 
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

// If we need to change the id name because the id can't duplicated so:
myP.id = `${myP.id}-clone`

myDiv.appendChild(myP);