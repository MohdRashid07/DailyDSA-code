// 12. Program to Display the Multiplication Table

// program to generate a multiplication table
const prompt = require('prompt-sync')()
// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

// second method

/* program to generate a multiplication table
upto a range */

// take number input from the user
const number1 = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number1;
    console.log(`${number1} * ${i} = ${result}`);
}