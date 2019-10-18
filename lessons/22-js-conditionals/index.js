alert("Enter two numbers to see if the first is greater than the second");

const firstNumber = prompt("What is the first number?");
const secondNumber = prompt("What is the second number?");

if (firstNumber > secondNumber) {
    alert("First number is greater");
} else if (firstNumber < secondNumber) {
    alert("First number is lesser");
} else {
    alert("Both are same numbers");
}