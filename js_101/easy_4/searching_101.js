const readline = require('readline-sync');

function getNumber(prompt) {
  return Number(readline.question(prompt));
}

const numbers = [];

numbers.push(getNumber('Enter the 1st number: '))
numbers.push(getNumber('Enter the 2nd number: '))
numbers.push(getNumber('Enter the 3rd number: '))
numbers.push(getNumber('Enter the 4th number: '))
numbers.push(getNumber('Enter the 5th number: '))

const last = Number(readline.question('Enter the last number: '));

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers}.`);
} else {
  console.log(`The number ${last} does not appear in ${numbers}.`)
}

if (numbers.some(number => number > last)) {
  console.log(`There is a number greater than ${last} in ${numbers}.`);
} else {
  console.log(`There isn't a number greater than ${last} in ${numbers}.`)
}