const readline = require('readline-sync');

const age = Number(readline.question('What is your age? '));
const retirementAge = Number(
  readline.question('At what age would you like to retired? ')
);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const yearsTillRetirement = retirementAge - age;
const retirementYear = currentYear + yearsTillRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsTillRetirement} years of work to go!`);