function swapCase(string) {
  return [...string]
    .map(character => {
      if (!isLetter(character)) return character;
      else if (isLowerCaseCharacter(character)) return character.toUpperCase();
      else return character.toLowerCase();
    })
    .join('');
}

function isLetter(character) {
  character = character.toLowerCase();
  return character >= 'a' && character <= 'z';
}

function isLowerCaseCharacter(character) {
  return character === character.toLowerCase();
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"