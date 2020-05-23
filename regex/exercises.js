// 1.

function isUrl(text) {
  return !!text.match(/^https?:\/\/\S+$/);
}

// isUrl('http://launchschool.com');   // -> true
// isUrl('https://example.com');       // -> true
// isUrl('https://example.com hello'); // -> false
// isUrl('   https://example.com');    // -> false

// 2.

function fields(text) {
  return text.split(/[ \t,]+/);
}

// console.log(fields("Pete,201,Student"));
// // -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// // -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// // -> ['Pete', '201']

// 3.

function mysteryMath(text) {
  return text.replace(/[+\-*/]/, '?');
}

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'

// 4. 

function mysteriousMath(text) {
  return text.replace(/[+\-*/]/g, '?');
}

// console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
// console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// 5.

function danish(text) {
  return text.replace(/\b(apple|blueberry|cherry)\b/, 'danish')
}

// console.log(danish('An apple a day keeps the doctor away'));
// // -> 'An danish a day keeps the doctor away'

// console.log(danish('My favorite is blueberry pie'));
// // -> 'My favorite is danish pie'

// console.log(danish('The cherry of my eye'));
// // -> 'The danish of my eye'

// console.log(danish('apple. cherry. blueberry.'));
// // -> 'danish. cherry. blueberry.'

// console.log(danish('I love pineapple'));
// // -> 'I love pineapple'

// 6.

function formatDate(text) {
  return text.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');
}

// console.log(formatDate('2016-06-17')); // -> '17.06.2016'
// console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

// 7.

function formatDate(text) {
  return text.replace(/(\d{4})([\-/])(\d{2})\2(\d{2})/, '$4.$3.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)