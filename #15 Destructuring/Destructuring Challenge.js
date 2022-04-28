/*
    Destructuring
    - Destructuring Challenge
*/
let chosen = 2;

let myFriends = [
  {
    title: "Ismail",
    age: 26,
    available: true,
    skills: ["Flutter","Java"],
  },
  {
    title: "Mohamed",
    age: 20,
    available: false,
    skills: ["C", "Python"],
  },
  
  {
    title: "Nouraddin",
    age: 21,
    available: true,
    skills: ["HTML", "CSS","JavaScript"],
  },
];

let groupOne = myFriends[0];
let groupTwo = myFriends[1];
let groupThree = myFriends[2];

console.log(groupOne);
console.log(groupTwo);
console.log(groupThree);

if (chosen == 1) {
    let {title,age,available,skills:[,skillTwo]} = groupOne;
    console.log(title);
    console.log(age);
    if(available == true) {
        console.log("Is Available");
    } else {
        console.log("Not Available")
    }
    console.log(skillTwo);
 
};
if (chosen == 2) {
  let {title,age,available,skills:[,skillTwo]} = groupTwo;
    console.log(title);
    console.log(age);
    if(available == true) {
        console.log("Is Available");
    } else {
        console.log("Not Available")
    }
    console.log(skillTwo);
};
if (chosen == 3) {
  let {title,age,available,skills:[,skillTwo]} = groupThree;
    console.log(title);
    console.log(age);
    if(available == true) {
        console.log("Is Available");
    } else {
        console.log("Not Available")
    }
    console.log(skillTwo);
}
