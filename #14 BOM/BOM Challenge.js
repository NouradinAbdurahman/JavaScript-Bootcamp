// // /*
// //     BOM [Browser Object Model]
// //     - BOM Challenge
// // */

// // Grapping the elements
// let input = document.querySelector(".input");
// let addTask = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");


// // Creating Elements
// let tasksUl = document.createElement("ul");
// let tasksLis = document.createElement("li");
// // let inputResult = document.createTextNode(input.innerHTML.value);
// let inputResult = document.createTextNode(input.value);

// let deleteBtnDiv = document.createElement("div")
// let deleteBtn = document.createElement("button");
// let ddeleteBtnText = document.createTextNode("Delete");

// // Adding class Name to the elements
// deleteBtnDiv.className = "deleteBtn";
// deleteBtn.className = "delete";

// // Adding the ul and li together
// tasksUl.appendChild(tasksLis);
// tasksLis.appendChild(inputResult);

// // Adding the deleteBtn and ddeleteBtnText together
// deleteBtnDiv.appendChild(deleteBtn);
// deleteBtn.appendChild(ddeleteBtnText);


// addTask.addEventListener("click", () => {
//   console.log(input.value);
//   tasksDiv.innerHTML = input.value
//   tasksDiv.appendChild(deleteBtnDiv);
// });


// // Styling the elements
// let deleteBtnStyling = document.querySelector(".delete");
// deleteBtnStyling.style.cssText =
// "border: none; outline: none; border-radius: 5px; font-weight: bold; background-color: #f00; color: white; padding: 5px";

let input = document.querySelector(".input");
let addTask = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let button = document.querySelector(".button");

addTask.addEventListener("click", function () {
    let btnDiv = document.createElement("div");
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Delete");
    btnDiv.appendChild(btn);
    btn.appendChild(btnText);
    btnDiv.className = "btnDiv";
    let paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    tasksDiv.appendChild(paragraph);

    window.localStorage.setItem(`task`, paragraph.innerText = input.value);

    btnDiv.addEventListener("click", () => {
        tasksDiv.removeChild(paragraph);
        tasksDiv.removeChild(btnDiv);
        window.localStorage.removeItem("task")

    });
    tasksDiv.appendChild(btnDiv);
    input.value = " ";

});