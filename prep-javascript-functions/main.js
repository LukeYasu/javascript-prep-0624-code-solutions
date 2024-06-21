function addTwoParameters(num1, num2) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is:`, sum + '.');
}

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  console.log(`${hours} hours is equal to ${minutes} minutes.`);
}

function getGreeting(name) {
  const greeting = `Hello ${name}, I hope you are having a great day.`;
  console.log(greeting);
}

function addAndMultiplyBy5(num1, num2) {
  const sumTimesFive = (num1 + num2) * 5;
  console.log(
    `the sum of ${num1} + ${num2} multiplied by 5 is ${sumTimesFive}.`
  );
}

function multiplyAndDivideBy5(num1, num2) {
  const productDividedByFive = (num1 * num2) / 5;
  console.log(
    `The product of ${num1} * ${num2} divided by 5 is ${productDividedByFive}.`
  );
}

function subtractTwoNumbers(num1, num2) {
  const difference = num1 - num2;
  console.log(`The difference between ${num1} and ${num2} is ${difference}.`);
}

function getCircleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(
    `The circunference of the circle from the radius ${radius} is ${circumference}.`
  );
}

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  console.log(`Your full name is ${fullName}.`);
}

function cube(number) {
  const cubed = number * number;
  console.log(`The number ${number} cubed is ${cubed}.`);
}
addTwoParameters(1, 2);
convertHoursToMinutes(4);
getGreeting('Joe');
addAndMultiplyBy5(10, 3);
multiplyAndDivideBy5(3, 5);
subtractTwoNumbers(41, 7);
getCircleCircumference(2);
getFullName('Carl', 'Carlson');
cube(5);
