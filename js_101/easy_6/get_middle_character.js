function centerOf(text) {
  let middleIndex = Math.floor(text.length / 2);
  let middleChars = text[middleIndex];
  if (text.length % 2 === 0) {
    middleChars = text[middleIndex - 1] + middleChars;
  }
  return middleChars;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"