/*
    DOM [Deal With Elements]
    - before [Element || String]
    - after [Element · || String]
    - append [Element · || String]
    - prepend · [Element || - String]
    - remove
*/

let element = document.getElementById("mydiv");
let createP = document.createElement("p");
let creatText = document.createTextNode("Hello")
createP.appendChild(creatText)

element.before("Added Before the Div");
element.after("Added After the Div");

element.before(createP);
element.after(createP);


element.append("Added append the Div");
element.prepend("Added prepend the Div");

element.append(createP);
element.prepend(createP);


// remove 
// element.remove()