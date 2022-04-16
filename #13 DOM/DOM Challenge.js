/*
    DOM [Challenge]
*/

let header = document.createElement("header");
let logoDiv = document.createElement("div");
let logoH1 = document.createElement("h1")
let logoText = document.createTextNode("Logo");
let unOrderListDiv = document.createElement("div")
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let liA1 = document.createElement("a");
let liA2 = document.createElement("a");
let liA3 = document.createElement("a");
let liA4 = document.createElement("a");
let liAText1 = document.createTextNode("Home");
let liAText2 = document.createTextNode("About");
let liAText3 = document.createTextNode("Service");
let liAText4 = document.createTextNode("Contact");

// Adding Class Names
header.className = "header";
logoDiv.className = "logo";
logoH1.className = "logoName";
unOrderListDiv.className = "unOrderList";
ul.className = "ul";
//////////////////////////////
li1.className = "li";
liA1.href = "#";
liA1.className = "link1";
//////////////////////////////
li2.className = "li";
liA2.href = "#";
liA2.className = "link2";
//////////////////////////////
li3.className = "li";
liA3.href = "#";
liA3.className = "link3";
//////////////////////////////
li4.className = "li";
liA4.href = "#";
liA4.className = "link4";

// Adding the elements together
header.appendChild(logoDiv);
logoH1.appendChild(logoText);
logoDiv.appendChild(logoH1);
unOrderListDiv.appendChild(ul)
//////////////////////////////
ul.appendChild(li1)
li1.appendChild(liA1);
liA1.appendChild(liAText1)
//////////////////////////////
ul.appendChild(li2);
li2.appendChild(liA2);
liA2.appendChild(liAText2);
//////////////////////////////
ul.appendChild(li3);
li3.appendChild(liA3);
liA3.appendChild(liAText3);
//////////////////////////////
ul.appendChild(li4);
li4.appendChild(liA4);
liA4.appendChild(liAText4);
//////////////////////////////
header.appendChild(unOrderListDiv)
console.log(header);
document.body.appendChild(header);


// Styling the elements
let headerStyle = document.querySelector(".header");
headerStyle.style.cssText =
"display: flex; flex-direction: row; justify-content: space-between; color: rgb(0, 135, 112); font-family: Arial, Helvetica, sans-serif; background-color: white";


let ulStyle = document.querySelector("ul");
ul.style.cssText = "list-style-type: none; display: flex;";


let aStyle1 = document.querySelector(".link1");
aStyle1.style.cssText = "display: inline-block; padding: 10px; text-decoration: none; color: grey; ";

let aStyle2 = document.querySelector(".link2");
aStyle2.style.cssText = "display: inline-block; padding: 10px; text-decoration: none; color: grey";

let aStyle3 = document.querySelector(".link3");
aStyle3.style.cssText = "display: inline-block; padding: 10px; text-decoration: none;color: grey";

let aStyle4 = document.querySelector(".link4");
aStyle4.style.cssText = "display: inline-block; padding: 10px; text-decoration: none;color: grey";
