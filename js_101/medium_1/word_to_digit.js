// input - String of words
// ouput - string with number words replaced with numbers

// split string into words
// loop through each word
//  check if word is a number workd
//    if number word then replace with number
//   else leave word as is
// join list of words together
const WORD_DIGITS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit(string) {
  Object.keys(WORD_DIGITS).forEach(numberWord => {
    let regexp = new RegExp(`\\b${numberWord}\\b`, 'gi')
    string = string.replace(regexp, WORD_DIGITS[numberWord]);
  });
  return string;
}

function wordToDigitsNoLoop(sentence) {
  let regex = new RegExp('\\b(' + Object.keys(WORD_DIGITS).join('|') + ')\\b', 'gi');
  return sentence.replace(regex, replaceWordNumberWithDigit);
}

function replaceWordNumberWithDigit(match) {
  return WORD_DIGITS[match];
}

console.log(wordToDigitsNoLoop(
  'Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigitsNoLoop('The weight is done.'));      // "The w8 is d1.")