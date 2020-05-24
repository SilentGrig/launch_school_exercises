function wordSizes(text) {
  const counts = {};
  const words = text.split(/\s/);
  words.forEach(word => {
    if (word.length > 0) {
      counts[word.length] = (counts[word.length] || 0) + 1;
    }
  });
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}