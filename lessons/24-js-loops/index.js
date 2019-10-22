for (let i = 0; i < 1000; i++) {

    if (i > 400) {
        break;
    }
    console.log(i);

}
/// -----for loop----
/// Show numbers from 0 to 10 
for (let i = 0; i <= 10; i++) {


    console.log(i);

}

///Show numbers from 100 to 0
for (let i = 100; i >= 0; i--) {


    console.log(i);

}

///Show even numbers between 0 and 100
for (let i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}

///Produce the pattern
for (let i = 10; i >= 1; i--) {
    let str = "";
    for (let j = i; j <= 10; j++) {
        str += "*";
    }
    console.log(str);
}

/// -----while loop----
/// Show numbers from 0 to 10 
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
///Show numbers from 100 to 0
i = 100;
while (i >= 0) {
    console.log(i);
    i--;
}

///Show even numbers between 0 and 100
i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

///Produce the pattern

i = 10;
j = 1;

while (i >= 1) {
    str = "";
    while (j <= i) {
        str += "*";
        j++;

    }
    console.log(str);

    i--;

}

/// -----do-while loop----
/// Show numbers from 0 to 10 
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

///Show numbers from 100 to 0
i = 100;
do {
    console.log(i);
    i--;
} while (i >= 0);

///Show even numbers between 0 and 100
i = 0;
do {
    if (i % 2 == 0) {
        console.log(i);
    }

    i++;
} while (i <= 100);