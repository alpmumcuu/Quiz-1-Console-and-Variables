const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let fahrenheit = prompt("Enter the temperature in Fahrenheit:");
let celsius = (fahrenheit - 32) * 5 / 9;
console.log("Equivalent temperature in Celsius: " + celsius + "°C");

//Program 2: Grade Calculator
let percentage = prompt("Enter your percentage score:");
let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("Your grade is: " + grade);
//Program 3: Leap Year Checker
let year = prompt("Enter a year:");
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
//Program 4: Largest Number Finder

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}