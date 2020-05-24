function cleanUp(text) {
  let output = '';
  for (let idx = 0; idx < text.length; idx++) {
    let character = text[idx];
    if ('abcdefghijklmnopqrstuvwxyz'.includes(character.toLowerCase())) {
      output += character;
    } else if (output[output.length - 1] !== ' ') {
      output += ' ';
    }
  }
  return output;
}

function cleanUp2(text) {
  return text.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp2("---what's my +*& line?"));    // " what s my line "