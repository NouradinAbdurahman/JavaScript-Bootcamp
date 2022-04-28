/*
    Destructuring
    - Destructuring Array Part 3 - Swaping Variables
*/

let book = "Video";
let video = "Book";

// In Old Way

// Save Book Value in Stash
// let stash = book // Video

// // Change Book Value
// book = video;  // Book

// // Change Video Value
// video = stash; // Video

// console.log(book);
// console.log(video);



// In New Way using Destructuring
[book, video] = [video, book]; // ["Book","Video"]
console.log(book);
console.log(video);