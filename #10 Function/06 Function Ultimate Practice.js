/*
    Function Advanced Practice
    - Parametars
    - Default
    - Rest
    - Loop
    - Condition
*/

function showInfo(userName = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome ${userName}</h2>`);
    document.write(`<div class="desc">`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Hour Rate: $${rate}</p>`);
    if (show === "Yes") {
        if (skills.length > 0) {
            document.write(`<p>Sillks: ${skills.join(" | ")}</p>`);
        } else {
            document.write(`<p>Skills : No Skills</p>`);
        }
    } else {
        document.write(`<p>Skills: Hiding</p>`);
    }
    document.write(`</div>`);
    document.write(`<div>`);
}
showInfo("Nouradin",21,20,"Yes", "HTML", "CSS", "JavaScript", "React");