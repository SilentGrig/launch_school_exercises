// rotate number of digits from the end to the end of the number and shift 
// remaining numbers to the left.

// input number, integer 'count' to indicate number from end to rotate
// output - number that has been rotated - number are immutable

// 21 - 2 -> 12

// convert number to string
// slice string into three parts
//   numbers and not including index from end (1)
//   number to be shifted (2)
//   remainder of number (3)
//   create new string with  (1) + (3) + (2)
//   convert back to a number
//   return number

// What if the count is greater than the number of digits in the number?
// return original number
// Do we need to validate that the number is a number? assuming number provided
// is valid.
// What if number provided is 0? - Would return 0.

function rotateRightmostDigits(number, count) {
  var stringNumber = String(number);

  if (count <= 1 || count > stringNumber.length) {
    return number;
  }

  let start = stringNumber.slice(0, -count);
  let shiftNumber = stringNumber.slice(-count, -count + 1);
  let remaindingNumbers = stringNumber.slice(-count + 1);

  return Number(start + remaindingNumbers + shiftNumber);
}

function rotateRightmostDigits2(number, count) {
  let stringNumber = String(number);
  let firstPart = stringNumber.slice(0, stringNumber.length - count);
  let secondPart = stringNumber.slice(stringNumber.length - count);
  let rotatedString = firstPart + rotateString(secondPart);

  return Number(rotatedString);
}

function rotateString(string) {
  return string.slice(1) + string.slice(0, 1);
}

console.log(rotateRightmostDigits2(735291, 0) === 735291);      // 735291
console.log(rotateRightmostDigits2(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits2(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits2(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits2(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits2(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits2(735291, 6) === 352917);      // 352917
console.log(rotateRightmostDigits2(735291, 7) === 735291);      // 735291