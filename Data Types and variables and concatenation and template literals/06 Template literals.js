/*
    Template Literals (Template String)
*/

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";
// in previous lesson we ware using concatenation like ( + " " + etc...)
console.log("In this way we used Normal way: " + a + " " + b + " " + c + " " + d); // Normal way



// But in this lesson we gonna learn new way to do that we gonna use something called back tick ==> ``
console.log(`In this way we used back tick: ${a} ${b} ${c} ${d}`);

// as we are using back tick we can use inside the back tick the double quotation and onde quotation and  back slash and double back slash and back slash (\n).
console.log(`In this way we used back tick: ${a} ${b} " " ' ' \ \n \\ ${c} ${d}`);


// Also  usewe are using  back tick we can use lagacy code but  example:
let title = "Nouradin";
let desc = "Welcome to my company";
let markUp = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;
// document.write(markUp);