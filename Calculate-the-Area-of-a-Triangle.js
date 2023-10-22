// base and height of a triangle, you can find the area using the formula:-
// area = (base * height) / 2

// 11. Program to Calculate the Area of a Triangle

const prompt = require('prompt-sync')()
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);

// second method

//JavaScript Program To Calculate The Area of a Triangle
var base = parseInt(prompt("Enter the base: "));
var height = parseInt(prompt("Enter the height: "));

//Calculating the area
var area = (base * height) / 2;

//Display Output
console.log("Base: " + base);
console.log("Height: " + height);
console.log("The area of the triangle is " + area);