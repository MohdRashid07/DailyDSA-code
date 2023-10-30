// 21. Program to Make a Simple Calculator (Take inpute from users)
const prompt = require('prompt-sync')()
// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number3 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

//Example 2: Simple Calculator with switch

// program for a simple calculator
let result1;

// take the operator input
const operator1 = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number3 = parseFloat(prompt('Enter first number: '));
const number4 = parseFloat(prompt('Enter second number: '));

switch(operator1) {
    case '+':
         result1 = number3 + number4;
        console.log(`${number3} + ${number4} = ${result1}`);
        break;

    case '-':
        result1 = number3 - number2;
        console.log(`${number3} - ${number4} = ${result1}`);
        break;

    case '*':
        result1 = number3 * number2;
        console.log(`${number3} * ${number4} = ${result1}`);
        break;

    case '/':
        result1 = number3 / number2;
        console.log(`${number3} / ${number4} = ${result1}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}