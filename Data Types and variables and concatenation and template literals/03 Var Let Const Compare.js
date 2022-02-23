/*
    Var
    - Redeclare (Yes)  ==> You can redeclare after you declare before.
    - Acess Before Declare (Undefined)
    - Variable Scope Drama [Add to window ] (Yes) ==> You can access from the window property.
    - Block or Function Scope 


    Let
    - Redeclare (NO => Error)  ==> You can't redeclare after you declare before.
    - Acess Before Declare (Error) ==> We can't access before initialization.
    - Variable Scope Drama (No) ==> You can't access from the window property.
    - Block or Function Scope 


    Const
    - Redeclare (NO => Error)  ==> You can't redeclare after you declare before.
    - Acess Before Declare (Error) ==> We can't access before initialization.
    - Variable Scope Drama (No) ==> You can't access from the window property.
    - Block or Function Scope 

*/

// You can redeclare after you declare before.
var declare1 = "Declare";
var declare1 = "Redeclare";

// You can't redeclare after you declare before.
/* 

let declare2 = "Declare";
let declare2 = "Redeclare";


const declare3 = "Declare";
const declare3 = "Redeclare";

*/

// Acess Before Declare (Undefined)
console.log(`Acess Before Declare but it's: ${acessBeforeDeclare1} `);
var acessBeforeDeclare1 = "Acess Before Declare";


// Acess Before Declare (Error) ==> We can't access before initialization.
/*

console.log(acessBeforeDeclare2);
let acessBeforeDeclare2 = "Acess Before Declare";

console.log(acessBeforeDeclare3);
const acessBeforeDeclare3 = "Acess Before Declare";

*/