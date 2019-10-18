let currentHour = prompt("Enter the current hour");

if (currentHour < 0 || currentHour > 23) {
    alert("Your input is incorrect");
} else if (currentHour < 8 || currentHour >= 18) {
    alert("Hour is outside of office hours");
} else if (currentHour >= 8 && currentHour < 18) {
    alert("We are open!!");
}