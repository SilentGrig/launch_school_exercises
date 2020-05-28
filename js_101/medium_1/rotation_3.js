// rotate left most digit in number - then rotate left plus one digit
// keep rotating until you have two digits and rotate one more time and return
// this string

// input - number to be rotated
// output - maximum rotation of number

// Take Number Rotate number with count equal to length of the number (1)
// Repeat the rotated number from (1) rotation but length - 1 (2)
// Keep repeating (3) until count = 1 then don't rotate anymore
// return final number

// T


function maxRotation(number) {
  let count = String(number).length;

  while (count > 1) {
    number = rotateRightmostDigits(number, count);
    count--;
  }

  return number;
}


function maxRotation2(number) {
  let numberOfDigits = String(number).length;

  for (let count = numberOfDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}

function rotateRightmostDigits(number, count) {
  let stringNumber = String(number);
  let firstPart = stringNumber.slice(0, stringNumber.length - count);
  let secondPart = stringNumber.slice(stringNumber.length - count);
  let rotatedString = firstPart + rotateString(secondPart);

  return Number(rotatedString);
}

function rotateString(string) {
  return string.slice(1) + string.slice(0, 1);
}

console.log(maxRotation2(735291) === 321579);          // 321579
console.log(maxRotation2(3) === 3);               // 3
console.log(maxRotation2(35) === 53);              // 53
console.log(maxRotation2(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation2(8703529146) === 7321609845);      // 7321609845