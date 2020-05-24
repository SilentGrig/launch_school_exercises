function wordSizes(text) {
  let counts = {};
  let words = text.split(' ');

  words.forEach(word => {
    if (word.length > 0) {
      let wordLength = word.match(/[a-z]/gi).length;
      counts[wordLength] = (counts[wordLength] || 0) + 1;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}