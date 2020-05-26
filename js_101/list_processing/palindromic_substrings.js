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

function palindromes(string) {
  let palindromes = [];
  for (let idx1 = 0; idx1 < string.length; idx1++) {
    for (let idx2 = idx1; idx2 < string.length; idx2++) {
      let subString = string.slice(idx1, idx2 + 1);
      if (isPalindrome(subString)) palindromes.push(subString);
    }
  }
  return palindromes;
}

function palindromes2(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes2('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]