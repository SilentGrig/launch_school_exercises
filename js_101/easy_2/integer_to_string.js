/* eslint-disable max-lines-per-function */
function getNumberString(number) {
  // coverts number from 0-9 to string
  // using array indexes is much nicer
  switch (number) {
    case 0:
      return '0';
    case 1:
      return '1';
    case 2:
      return '2';
    case 3:
      return '3';
    case 4:
      return '4';
    case 5:
      return '5';
    case 6:
      return '6';
    case 7:
      return '7';
    case 8:
      return '8';
    case 9:
      return '9';
    default:
      return NaN;
  }
}

function integerToString(number) {
  let string = '';

  do {
    let digit = number % 10;
    string = getNumberString(digit) + string;
    number = Math.floor(number / 10);
  } while (number > 0);

  return string;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"