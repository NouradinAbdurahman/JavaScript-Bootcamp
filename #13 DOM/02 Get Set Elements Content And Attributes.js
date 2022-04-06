/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");
// Get

/*
    - innerHTML
    - textContent
*/
console.log(myElement.innerHTML);
console.log(myElement.textContent);
console.log(myElement.innerText);

// Set
myElement.innerHTML = "Text From <span>main.js</span> File";
console.log(myElement.innerHTML);

myElement.innerHTML = "Text From <span>main.js</span> File";
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>main.js</span> File";
console.log(myElement.innerText);

/*
  - Change Attributes Directly
  - Change Attributes With Methods
*/

document.images[0].src = "https://cdn.pixabay.com/photo/2022/03/26/10/55/building-7092747_1280.jpg";
document.images[0].alt = "image";
document.images[0].className = "img"
document.images[0].style.width = "50%";
document.images[0].style.display = "block";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");