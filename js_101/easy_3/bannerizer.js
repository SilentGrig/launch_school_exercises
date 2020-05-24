// Write a function that will take a short line of text, and write it to the
// console log within a box.

// Input - String - Short line - assume a single line.
// Ouput - Multi-lined String
// Empty String is 4 characters wide and 5 characters high
// width is length is length of text, plus two dashes and sides.

function logInBox(text) {
  const hortizontalRule = `+-${"-".repeat(text.length)}-+`;
  const emptyLine = `| ${" ".repeat(text.length)} |`;

  console.log(hortizontalRule);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(hortizontalRule);
}

function LogInBoxTruncate(text, maxLength = 80) {
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
  }
  const hortizontalRule = `+-${"-".repeat(text.length)}-+`;
  const emptyLine = `| ${" ".repeat(text.length)} |`;

  console.log(hortizontalRule);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(hortizontalRule);
}

// Take string and slit into array of strings of max length provided
// logging text should iterate through the array
// Can I wrap a word? Would be easier.

function LogInBoxWrap(text, maxLength = 80) {
  let textArray = [];

  do {
    textArray.push(text.slice(0, maxLength));
    text = text.slice(maxLength);
  } while (text.length > 0);

  const longestString = textArray[0].length;

  const hortizontalRule = `+-${"-".repeat(longestString)}-+`;
  const emptyLine = `| ${" ".repeat(longestString)} |`;

  console.log(hortizontalRule);
  console.log(emptyLine);
  textArray.forEach(line => console.log(`| ${line.padEnd(longestString)} |`));
  console.log(emptyLine);
  console.log(hortizontalRule);
}

// eslint-disable-next-line max-lines-per-function
function LogInBoxWrap2(text, maxLineLength = 80) {
  let textArray = [];
  let words = text.split(' ');
  let subArray = [];
  const lengthOfSubArray = subArray => subArray.reduce((total, word) => {
    return total + word.length;
  }, 0) + (subArray.length - 1); // to account for spacing between words

  words.forEach(word => {
    if (lengthOfSubArray(subArray) + (word.length + 1) < maxLineLength) {
      subArray.push(word);
    } else {
      textArray.push(subArray);
      subArray = [word];
    }
  });

  textArray.push(subArray);

  const longestLine = textArray.reduce((maxLength, wordArray) => {
    return Math.max(maxLength, lengthOfSubArray(wordArray));
  }, 0);

  const hortizontalRule = `+-${"-".repeat(longestLine)}-+`;
  const emptyLine = `| ${" ".repeat(longestLine)} |`;

  console.log(hortizontalRule);
  console.log(emptyLine);
  textArray.forEach(wordArray => 
    console.log(`| ${wordArray.join(' ').padEnd(longestLine)} |`)
  );
  console.log(emptyLine);
  console.log(hortizontalRule);
}

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// LogInBoxTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tellus id ex dapibus bibendum. Vivamus eget malesuada elit, sed.');
// LogInBoxWrap('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tellus id ex dapibus bibendum. Vivamus eget malesuada elit, sed.');
// LogInBoxWrap('To boldly go where no one has gone before.');
// LogInBoxWrap2('');
// LogInBoxWrap2('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tellus id ex dapibus bibendum. Vivamus eget malesuada elit, sed.');
LogInBoxWrap2('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rutrum libero. Donec nulla enim, porta sit amet lacus et, dictum luctus ex. Donec est magna, efficitur eget leo quis, mattis accumsan risus. Nulla ornare tincidunt accumsan. Donec non tempus tellus, sed iaculis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent luctus felis at venenatis tristique. Mauris vestibulum pharetra dolor, ut condimentum lacus aliquet quis. Suspendisse eget quam nec lectus laoreet porta. Fusce mauris metus, varius sit amet leo quis, posuere finibus libero. Phasellus ante orci, porta quis varius a, commodo id nisi.');