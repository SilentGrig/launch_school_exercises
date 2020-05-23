/*
 * Write a function that takes a string argument and returns a new string that
 * contains the value of the original string with all consecutive duplicate
 * characters collapsed into a single character.
*/

/* Problem
 * Input - String
 * Output - String with consective characters collapsed into a single character
 * Not limiting to a-zA-Z, flatten white space as well.
 * Create a new String
 * Add first character of input string to new String - definitely included
 * Loop through reset of the characters in the input string
 * If the character isn't the same as the previous character
 * then add it to the new String
 * return the new String
 *
 * Edge Cases? - empty String - return empty String
 * How do we handle last character? same as other character should be compared
 * First Chracter? - First character should always be included
 */

function crunch(string) {
  let newString = '';

  for (let idx = 0; idx < string.length; idx++) {
    let lastCharacter = string[idx - 1];
    let currentCharacter = string[idx];

    if (currentCharacter !== lastCharacter) {
      newString += currentCharacter;
    }
  }

  return newString;
}

function crunch2(string) {
  return string.split('').reduce((crunchedString, character) => {
    return (character !== crunchedString[crunchedString.length - 1] ?
      crunchedString + character : crunchedString);
  }, '');
}

function crunch3(text) {
  return text.replace(/([0-9a-z])\1*/gi, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""

console.log(crunch3('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch3('4444abcabccba'));              // "4abcabcba"
console.log(crunch3('ggggggggggggggg'));            // "g"
console.log(crunch3('a'));                          // "a"
console.log(crunch3(''));                           // ""