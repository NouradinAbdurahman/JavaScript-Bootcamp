/*
    DOM [Travesing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/

let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.previousSibling);

console.log(span.nextElementSibling);
console.log(span.previousElementSibling);

console.log(span.parentElement);

span.addEventListener("click", () => {
    span.parentElement.style.opacity = "0"
    span.parentElement.remove();
})


