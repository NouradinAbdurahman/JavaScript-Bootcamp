/*
    Practice - Add Products To Page
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 6;
document.write(`<h1> Show <span>${showCount}</span> Products </h1> <br>`);
for (let i = 0; i < showCount; i++) {
document.write(`<div>`);
document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p> `);
}
document.write(`<p>${colors.join(" | ")}</p>`);
document.write(`</div> <br>`);
}