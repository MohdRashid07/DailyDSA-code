// 9. Program to Check if a number is Positive, Negative, or Zero

// program that checks if the number is positive, negative or zero
// input from the user
const prompt = require('prompt-sync')()
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}


// 2. second method

// check if the number is positive, negative or zero
const prompt1 = require('prompt-sync')()
const number1 = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}