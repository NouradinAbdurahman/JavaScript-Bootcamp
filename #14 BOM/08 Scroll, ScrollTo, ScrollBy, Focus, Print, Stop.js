/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options) // it will scroll the height and the width you gave it only one time
  - scroll(x, y || Options)
  - scrollBy(x, y || Options) // it will scroll whatever height you are now 
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth"
});

window.scrollBy({
    left: 500,
    top: 200,
    behavior : "smooth"
});
