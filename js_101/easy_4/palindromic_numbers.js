function isPalindromicNumber(number) {
  let stringNumber = String(number);
  return stringNumber === stringNumber.split('').reverse().join('');
}



console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(00300));            // true

// For leading zeros would need to take input as a String rather than a number
// As JavaScript will automatically treat numbers with leading numbers as
// octacals and covert to base 10.