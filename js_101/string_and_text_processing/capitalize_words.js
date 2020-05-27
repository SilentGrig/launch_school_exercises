function wordCap(text) {
  return text.split(' ').map(capitalizeWord).join(' ');
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "Quoted" word'));    // 'This Is A "quoted" Word'