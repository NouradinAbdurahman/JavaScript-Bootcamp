let btn = document.querySelector("button");
window.onscroll = () => {
    if(window.scrollY >= 600) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none";
    };
};
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});