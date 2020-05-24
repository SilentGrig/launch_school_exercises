function swap(text) {
  let words = text.split(' ');
  const swappedWords = words.map(word => {
    if (word.length === 1) {
      return word;
    }
    return word.slice(-1) + word.slice(1, -1) + word[0];
  });
  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"