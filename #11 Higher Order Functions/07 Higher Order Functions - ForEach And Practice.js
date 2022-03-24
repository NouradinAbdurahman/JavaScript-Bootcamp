// Get All The Lists
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach((ele) => {
  ele.onclick = function (ele) {
    // Remove Active Class From All Elements
    allLis.forEach((ele) => {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach((ele) => {
      ele.style.display = "none";
    });
  };
});
