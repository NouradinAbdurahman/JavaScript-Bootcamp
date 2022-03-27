/*
    Object
    - Intro
    - Testing window Object
    - Accessing Object 
*/

let user = {
    // Properties
    firstName: "Nouraddin",
    middleName: "Abdurahman",
    lastName: "Aden",
    age: 21,
    country: "Somalia",
    isMarried : false,
    educationStatus: {
        universityName: "Ostim Technical University",
        studyStage: "Bachelore Degree",
        department: "Engineering",
        faculty: "Softwere Engineering"
    },
    hoppies: ["Solving Problems"," Reading Books"," Traveling",],
    // Methods
    sayHello: () => {
        return `My Name is: ${user.firstName} ${user.lastName}, I Code Everyday.`;
    },
};

// Accessing Object
console.log(user);
console.log(" ");
console.log(`First Name: ${user.firstName}`);
console.log(`Middle Name: ${user.middleName}`);
console.log(`Last Name: ${user.lastName}`);
console.log(`Age: ${user.age}`);
console.log(`Country: ${user.country}`);
console.log(`Is Married: ${user.isMarried}`);
console.log(`University Name: ${user.educationStatus.universityName}`);
console.log(`Study Stage : ${user.educationStatus.studyStage}`);
console.log(`Department : ${user.educationStatus.department}`);
console.log(`Faculty : ${user.educationStatus.faculty}`);
console.log(`Hoppies: ${user.hoppies}`);
console.log(`Method: ${user.sayHello()}`);