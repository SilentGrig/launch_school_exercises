function substringsAtStart(string) {
  let subStrings = [];
  for (let idx = 0; idx < string.length; idx++) {
    subStrings.push(string.slice(0, idx + 1));
  }
  return subStrings;
}

function substringsAtStart2(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(substringsAtStart2('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart2('a'));        // ["a"]
console.log(substringsAtStart2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]