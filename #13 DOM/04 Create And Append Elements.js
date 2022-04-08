/*
    DOM [Create Elements]
    - createEleement
    - createComment
    - createTextNode
    - createAttribute
    - appendChild
*/
let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product");
let myComment = document.createComment("This is div");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
// we can add attribute in another way
myElement.setAttribute("data-test","Testing") 

myElement.appendChild(myComment);
myElement.appendChild(myText);
document.body.appendChild(myElement);
console.log(myElement);