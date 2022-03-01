/*
    Switch Statement

    switch (Expression) {
        case 1:
            // Code Block
            break;
        case 2:
            // Code Block
            break;
        case 3:
            // Code Block
            break;
        default:
            // Code Block

    }
    -  Default Ordering
    - Multiple Match
    - === ( Switch Statement compare the values with identical Operator )
*/

let day = 1;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Unknown Day");
}