//exercise1
console.log(“This is my first programe ”)
console.log(“Well come John your month salary is 500000”)

//exercise2
const num1 = 5;
const num2 = 3; // add two numbers
const sum = num1 + num2; // display the sum 
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//exercise3
//app.js or index.js
const prompt = require('prompt-sync')(); // This line is essential 
console.log("starting") 
const name = prompt('Enter your name: '); 
console.log(Hello, ${name});
const number = parseInt(prompt("Enter a number: "));
if (number > 0) { 
console.log("The number is positive");
}
else if (number == 0){ 
console.log("The number is zero"); 
}
else{ 
    console.log("The number is negative");
}