function shortLongShort(firstString, secondString) {
  let shortString;
  let longString;

  if (firstString.length < secondString.length) {
    shortString = firstString;
    longString = secondString;
  } else {
    shortString = secondString;
    longString = firstString;
  }
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"