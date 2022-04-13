/*
    DOM [Simulation]
    - click
    - focus
    - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

// focus
window.onload = function () {
    two.focus();
};

// blus with click
one.onblur = function () {
    document.links[0].click();
}