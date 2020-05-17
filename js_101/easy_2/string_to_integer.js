const CHAR_TO_NUM = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function stringToInteger(numberString) {
  let number = 0;
  let multipler = 1;
  for (let idx = numberString.length - 1; idx >= 0; idx--) {
    let digit = CHAR_TO_NUM[numberString[idx]];
    number += (digit * multipler);
    multipler *= 10;
  }
  return number;
}

function hexadecimalToInteger(numberString) {
  let arrayOfDigits = numberString.split('').map(digit => {
    return CHAR_TO_NUM[digit.toUpperCase()];
  });
  return arrayOfDigits.reduce((value, digit) => (value * 16) + digit, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871);