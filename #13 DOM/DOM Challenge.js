/*
    DOM [Challenge]
*/

// Header Section
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
document.body.style.cssText = "margin: 0px; background-color: rgb(236,236,236)"
let headerStyle = document.querySelector(".header");
headerStyle.style.cssText =
"display: flex; flex-direction: row; justify-content: space-between; color: rgb(0, 135, 112); font-family: Arial, Helvetica, sans-serif; background-color: white; align-items: center";

let logoStyle = document.querySelector(".logo");

logoStyle.style.cssText = "margin-left: 20px"

let ulStyle = document.querySelector("ul");
ul.style.cssText = "list-style-type: none; display: flex;";


let aStyle1 = document.querySelector(".link1");
aStyle1.style.cssText = "display: inline-block; padding: 10px; text-decoration: none; color: grey; ";

let aStyle2 = document.querySelector(".link2");
aStyle2.style.cssText = "display: inline-block; padding: 10px; text-decoration: none; color: grey";

let aStyle3 = document.querySelector(".link3");
aStyle3.style.cssText = "display: inline-block; padding: 10px; text-decoration: none;color: grey";

let aStyle4 = document.querySelector(".link4");
aStyle4.style.cssText = "display: inline-block; padding: 10px; text-decoration: none;color: grey; margin-right: 20px";

//////////////////////////////////////////////////////////////////////////////////

// Products Section
let cardSection = document.createElement("section");
let cardSectionContent = document.createElement("div");
let products = document.createElement("div");

for(let i = 1; i <= 15; i++) {
    let span = document.createElement(`span`);
    let h2 = document.createElement(`h2`);
    let h2Numbers = document.createTextNode(`${i}`);
    let spanText = document.createTextNode(`Product`);
    products.appendChild(span);
    span.appendChild(h2);
    h2.appendChild(h2Numbers)
    span.appendChild(spanText);

    span.className = "product";
    h2.className = "number";
    spanText.className = "productName";
}

// Adding Class Names
cardSection.className = "cardSection";
cardSectionContent.className = "cardSectionContent";
products.className = "products";

// Adding the elements together
cardSection.appendChild(cardSectionContent);
cardSectionContent.appendChild(products)

console.log(cardSection)
document.body.appendChild(cardSection);

// Styling the elements
let productstyle =document.querySelector(".products").style.cssText = 
"text-align: center"
for(let j = 0; j < 15 ;j++){
    let myProduct = document.getElementsByClassName("product");
    // console.log(myProduct);
    myProduct[j].style.padding= "20px";
    myProduct[j].style.margin = "5px";
    myProduct[j].style.width= "calc((100% - 33px) / 3)";
    myProduct[j].style.fontFamily = "Arial, Helvetica, sans-serif";
    myProduct[j].style.backgroundColor= "rgb(255, 255, 255)";
    myProduct[j].style.textAlign="center";
    myProduct[j].style.color= "rgb(136, 136, 136)";
    myProduct[j].style.boxSizing= "border-box";
    myProduct[j].style.border= "1px solid rgb(221, 221, 221)";
    myProduct[j].style.borderRadius= "6px";
    myProduct[j].style.display = "inline-block;";

    //style span
    let mySpan = document.getElementsByTagName("span");
    // console.log(mySpan);
    mySpan[j].style.fontFamily = "Arial, Helvetica, sans-serif";
    mySpan[j].style.fontSize= "20px";
    mySpan[j].style.display= "block";
    mySpan[j].style.fontWeight="normal";
    mySpan[j].style.color= "black";
    mySpan[j].style.marginBottom= "5px";
    mySpan[j].style.marginTop= "5px";
    mySpan[j].style.display = "inline-block";
}

//////////////////////////////////////////////////////////////////////////////////


// Footer Section
let footer = document.createElement("footer");
let footerContent = document.createElement("h2");
let footerText = document.createTextNode("CopyRight 2022");

// Adding Class Names
footer.className = "footerSection";
footerContent.className = "footerContent";


// Adding the elements together
footer.appendChild(footerContent);
footerContent.appendChild(footerText);

console.log(footer);
document.body.appendChild(footer);

// Styling the elements
let FooterStyle = document.querySelector(".footerSection").style.cssText = 
"background-color: rgb(0, 135, 112);; padding: 10px; font-family: Arial, Helvetica, sans-serif; text-align: center; color: white";