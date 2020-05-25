function isBalanced(text) {
  let openingParen = 0;
  let closingParen = 0;
  for (let idx = 0; idx < text.length; idx++) {
    let char = text[idx];
    if (char === ')') {
      closingParen += 1;
      if (closingParen > openingParen) {
        return false;
      }
    } else if (char === '(') {
      openingParen += 1;
    }
  }
  return openingParen === closingParen;
}

function isBalanced2(text) {
  let pairs = {
    '()': 0,
    '[]': 0,
    '{}': 0,
    "''": 0,
    '""': 0
  };

  for (let idx = 0; idx < text.length; idx++) {
    let char = text[idx];
    updatePairs(pairs, char);
    if (Object.values(pairs).some(count => count < 0)) {
      return false;
    }
  }
  return areAllPairsClosed(pairs);
}

function updatePairs(pairs, char) {
  Object.keys(pairs).forEach(pair => {
    let idxOfChar = pair.indexOf(char);
    if (idxOfChar === 0) {
      pairs[pair] += 1;
    } else if (idxOfChar === 1) {
      pairs[pair] -= 1;
    }
  });
}

function areAllPairsClosed(pairs) {
  return Object.keys(pairs).every(pair => {
    if (pair === "''" || pair === '""') {
      return pairs[pair] % 2 === 0;
    }
    return pairs[pair] === 0;
  })
}

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced2("What (is) 'this?'") === true);
console.log(isBalanced2("What is 'this?") === false);
console.log(isBalanced2("What (is this?") === false);
console.log(isBalanced2("((What) (is this))?") === true);
console.log(isBalanced2("((What)) (is this))?") === false);
console.log(isBalanced2("Hey!") === true);
console.log(isBalanced2(")Hey!(") === false);
console.log(isBalanced2("What ((is))) up(") === false);