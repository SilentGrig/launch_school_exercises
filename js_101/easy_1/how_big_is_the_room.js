const readline = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639;

console.log('Calculate in meters or feet?');
let inputType = readline.question();

// Assuming input is correct
console.log(`Enter the length of the room in ${inputType}:`);
let length = Number(readline.prompt());

console.log(`Enter the width of ther room in ${inputType}:`);
let width = Number(readline.prompt());

let area = length * width;
let conversionArea;

if (inputType === 'meters') {
  conversionArea = (area * SQMETERS_TO_FEET);
} else {
  conversionArea = (area / SQMETERS_TO_FEET);
}

let conversionType = (inputType === 'meters' ? 'feet' : 'meters');

console.log(
  `The area of the room is ${area.toFixed(2)} square ${inputType} (${conversionArea.toFixed(2)} square ${conversionType}).`
);