let weekdayNumber = 7;

/// Using if else:
if (weekdayNumber == 1) {
    console.log("Today is Monday");
} else if (weekdayNumber == 2) {
    console.log("Today is Tuesday");
} else if (weekdayNumber == 3) {
    console.log("Today is Wednesday");
} else if (weekdayNumber == 4) {
    console.log("Today is Thursday");
} else if (weekdayNumber == 5) {
    console.log("Today is Friday");
} else if (weekdayNumber == 6) {
    console.log("Today is Saturday");
} else if (weekdayNumber == 7) {
    console.log("Today is Sunday");
} else {
    console.log(" Error: Number not between 1-7");
}

/// Using Switch statement:

let day
switch (weekdayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Not Exist"
        break;
}
console.log(`Today is ${day}`);