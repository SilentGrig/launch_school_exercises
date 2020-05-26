function substrings(string) {
  let charArray = string.split('');
  let substrings = [];
  for (let idx1 = 0; idx1 < charArray.length; idx1++) {
    for (let idx2 = idx1; idx2 < charArray.length; idx2++) {
      substrings.push(string.slice(idx1, idx2 + 1));
    }
  }
  return substrings;
}

function substrings2(string) {
  return string.split('').map((_ , idx, charArray) => {
    return charArray.slice(idx).map((_, idx2, subCharArray) => {
      return subCharArray.slice(0, idx2 + 1).join('');
    });
  }).flat();
}

console.log(substrings('abcde'));
console.log(substrings2('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]