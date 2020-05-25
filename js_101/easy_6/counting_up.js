function sequence(number) {
  let sequenceArray = [];
  for (let num = 1; num <= number; num++) {
    sequenceArray.push(num);
  }
  return sequenceArray;
}

function sequence2(limit) {
  return Array(limit).fill(0).map((_, idx) => idx + 1);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
console.log(sequence2(5));    // [1, 2, 3, 4, 5]
console.log(sequence2(3));    // [1, 2, 3]
console.log(sequence2(1));    // [1]