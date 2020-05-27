function letterCaseCount(string) {
  var counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  [...string].forEach(character => {
    if (!isLetter(character)) {
      counts.neither += 1;
    } else if (character === character.toLowerCase()) {
      counts.lowercase += 1;
    } else {
      counts.uppercase += 1;
    }
  });
  return counts;
}

function isLetter(character) {
  character = character.toLowerCase();
  return character >= 'a' && character <= 'z';
}

function letterCaseCount2(string) {
  var lowercase = string.match(/[a-z]/g);
  var uppercase = string.match(/[A-Z]/g);
  var neither = string.match(/[^a-z]/gi);
  return {
    lowercase: (lowercase ? lowercase.length : 0),
    uppercase: (uppercase ? uppercase.length : 0),
    neither: (neither ? neither.length : 0)
  };
}

function letterCaseCount3(string) {
  var lowercase = string.match(/[a-z]/g) || [];
  var uppercase = string.match(/[A-Z]/g) || [];
  var neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length
  };
}

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
// console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
console.log(letterCaseCount3('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount3('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount3('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount3(''));            // { lowercase: 0, uppercase: 0, neither: 0 }