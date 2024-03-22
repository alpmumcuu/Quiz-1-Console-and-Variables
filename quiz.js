const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
// this prompts to enter any temperature in Farenheit
let fahrenheit = prompt("Enter any Temperature in Farenheit:");
// This converts farenheit to celcius using the formula for conversion
let celsius = (fahrenheit - 32) * 5 / 9;
// This finally displays the temperature the farenheight temperature you inputed into celcius
console.log("The equivalent temperature in celcius is: " + celsius + "°C");

//Program 2: Grade Calculator
// this prompts to enter a percentage score
let percentage = prompt("Enter the score you got on your test:");
// this declares a varible to assign the percentage to
let grade;
// These determine the grade based on the percentage inputed
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
// this shows the final calculated grade
console.log("Your grade is: " + grade);
//Program 3: Leap Year Checker
// this prompts to enter any year
let year = prompt("Enter a year:");
// this checks if the year entered is a leap year
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// if the year entered is a leap year show a message stating it is. If its not show message saying it is not a leap year
if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
//Program 4: Largest Number Finder
// prompts to enter any 3 numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
// this now converts the 3 entered numbers from strings to numbers
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
// this checks which number the largest is. if the first number display it etc.
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}