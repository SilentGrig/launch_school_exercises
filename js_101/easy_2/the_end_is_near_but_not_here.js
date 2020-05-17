function penultimate(string) {
  let words = string.split(/\s+/);
  return words[words.length - 2];
}

function middleWorld(words) {
  let wordsArray = words.split(/\s+/);
  let middle = Math.floor(wordsArray.length / 2);
  let middleWords = wordsArray[middle];
  if (wordsArray.length % 2 === 0) { // if even number of words return both middle words
    middleWords = `${wordsArray[middle - 1]} ${middleWords}`;
  }
  return middleWords;
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(middleWorld(""));
console.log(middleWorld("hello"));
console.log(middleWorld("hello world"));
console.log(middleWorld("hello world today"));
console.log(middleWorld("hello world today goodnight"));