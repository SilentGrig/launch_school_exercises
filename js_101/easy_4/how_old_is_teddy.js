// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

function randomNumberBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomAge = randomNumberBetween(20, 120);

console.log(`Teddy is ${randomAge} years old!`);


let randomNumbers = [];

let min = 1;
let max = 100;

for (let idx = 0; idx < 1000000; idx++) {
  let randomNumber = randomNumberBetween(min, max);
  randomNumbers.push(randomNumber);
}

// console.assert(
//   randomNumbers.every(number => number >= min && number <= max ),
//   'number was outside range'
// );
// console.assert(
//   randomNumbers.some(number => number === min),
//   'one of the numbers wasn\'t the minimum'
// );
// console.assert(
//   randomNumbers.some(number => number === max),
//   'one of the numbers wasn\'t the maximum'
// );