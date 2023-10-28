// 19. Program to Find the Factors of a Number


let n = 12; 
let i = 1; 
for (i = 1; i < n; i++) { 
	if (n % i == 0) { 
		console.log(i); 
	} 
} 
console.log(n);

// second method
// program to find the factors of an integer
const prompt = require('prompt-sync')()
// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}