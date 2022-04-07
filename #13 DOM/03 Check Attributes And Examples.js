/*
    DOM [Check Attribtes]
    - Element.attributes
    - Element.hasAttribute
    - Element.hasAttributes
    - Element.removeAttributes
*/
console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute){
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value")
    }
} else {
    console.log("Not Found");
}

if (myP.hasAttributes()) {
    console.log("Has Attributes");
} else {
    console.log("Has Not Attributes");
}


// Div
if(document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("Has Attributes");
} else {
    console.log("Has Not Attributes");
}