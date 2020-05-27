function isUppercase(string) {
  return [...string].every(char => {
    return !isLetter(char) || char.toUpperCase() === char;
  });
}

function isLetter(character) {
  character = character.toLowerCase();
  return character >= 'a' && character <= 'z';
}

function isUppercase2(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
console.log(isUppercase2('t'));               // false
console.log(isUppercase2('T'));               // true
console.log(isUppercase2('Four Score'));      // false
console.log(isUppercase2('FOUR SCORE'));      // true
console.log(isUppercase2('4SCORE!'));         // true
console.log(isUppercase2(''));                // true