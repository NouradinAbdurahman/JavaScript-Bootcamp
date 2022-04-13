/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS

  --- onclick
  --- oncontextmenu  // Right Click on M ouse
  --- onmouseenter
  --- onmouseleave

    - For Window
  --- onload
  --- onscroll
  --- onresize

    - For Form
  --- onfocus
  --- onblur
  --- onsubmit
*/

// onclick
let myBtn = document.getElementById("btn");
myBtn.onclick = () => {
    console.log("Clicked Using Onclick Function");
};

// oncontextmenu
myBtn.oncontextmenu = () => {
    console.log("Opening Oncontextmenu (Right Click)");
};

// onmouseenter
myBtn.onmouseenter = () => {
    console.log("Onmouseenter");
};

// onmouseleave
myBtn.onmouseleave = () => {
    console.log("onmouseleave");
};

// onscroll
window.onscroll = () => {
    console.log("onscroll");
};

// onresize
window.onresize = () => {
    console.log("onresize");
};