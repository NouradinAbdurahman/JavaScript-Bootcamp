/*
    DOM [CSS]
    - style
    - cssText
    - removeProperty(propertyName)· [Inline, Stylesheet]
    - setProperty(propertyName, value, priority)
*/

let element = document.getElementById("mydiv");
// Inline Style
element.style.color = "red";
element.style.fontWeight = "bold";

// Writing all the css in one chain
element.style.cssText = "color: green; font-weight: bold; font-size: 30px";

// How can we remove property from inline css and add a property in line style
element.style.removeProperty("color");
element.style.setProperty("font-size", "50px", "important");

// External Style
document.styleSheets[0].cssRules[0].style.removeProperty("background-color");
document.styleSheets[0].cssRules[0].style.setProperty("background-color","red");