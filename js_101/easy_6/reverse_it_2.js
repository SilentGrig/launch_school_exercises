function reverseWords(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseWords2(sentence) {
  return sentence.split(' ').map(word => {
    return word.length >= 5 ? reverseWord(word) : word;
  }).join( ' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
console.log(reverseWords2('Professional'));             // "lanoisseforP"
console.log(reverseWords2('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords2('Launch School'));            // "hcnuaL loohcS"