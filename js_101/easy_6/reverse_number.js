function reverseNumber(number) {
  let stringNumber = String(number);
  let reversedNumber = stringNumber.split('').reverse().join('');
  return parseInt(reversedNumber, 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1