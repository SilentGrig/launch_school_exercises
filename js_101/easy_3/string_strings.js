/*
 * Write a function that takes one argument, a positive integer, and returns a
 * string of alternating '1's and '0's, always starting with a '1'. The length
 * of the string should match the given integer.
 */

// Input: Number > 0
// Output: String: Alternative 1s 0s starting with a 1

function stringy(length) {
  let output = '10'.repeat(length / 2);
  if (length % 2 === 1) {
    output += '1';
  }
  return output;
}

function stringy2(length) {
  let output = '';
  for (let idx = 0; idx < length; idx++) {
    output += (idx % 2 === 0 ? '1' : '0');
  }
  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(0));    // ""

console.log(stringy2(6));    // "101010"
console.log(stringy2(9));    // "101010101"
console.log(stringy2(4));    // "1010"
console.log(stringy2(7));    // "1010101"
console.log(stringy2(0));    // ""