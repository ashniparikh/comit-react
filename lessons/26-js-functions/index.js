///Define a function that will show even numbers from 0 to 100 as output
function evenNum() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenNum();

///Define a function named showUser that will output the following data:
let name = "Ashni";
let age = 24;
let phonenumber = 123456789;
let street = "123 xyz";
let postalcode = "S9M 0h7";
let married = false;

function showUser() {
    console.log(`Hello there ${name} here, age is ${age} details ${phonenumber} ${street} ${postalcode} married:${married}`);

}

showUser();

///Define a evenNumbers variable and assign a function as value
let evenNumbers = function() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenNumbers();

/// Fib variable:
let fib = (num) => {
    if (num == 0) {
        return num;
    } else if (num == 1) {
        return num;
    } else {
        let first = 0;
        let second = 1;
        let nth = 0;

        for (let i = 2; i <= num; i++) {
            nth = first + second;
            first = second;
            second = nth;
        }
        return nth;
    }
};

let fibonacci = function(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fib(i));
    }

}

fibonacci(10);

///Define a showName variable and assign a function as value

let showName = function() {
    console.log("============");
    console.log("=  ASHNI  =");
    console.log("============");
}

showName();