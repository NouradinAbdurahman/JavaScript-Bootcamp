let title = "Elzero",
    description= "Elzero Web School",
    date = "25/10";
let div = `
    <div class="hero">
        <div class="hero-contant">
            <h3>Hello ${title}</h3>
            <p>${description}</p>
            <span>${date}</span>
        </div>
    </div>
`;
//The chalange was to create this div four times but we can use the repeat method in javascript so we don't have to write that div four times.
// document.write(div.repeat(4));