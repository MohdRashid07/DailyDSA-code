// 16. Program to Find the Sum of Natural Numbers (Take input from users)

// program to display the sum of natural numbers
const prompt = require('prompt-sync')()
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);