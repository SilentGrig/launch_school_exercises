function sequence(times, number) {
  let sequenceArray = [];
  for (let idx = 1; idx <= times; idx++) {
    sequenceArray.push(number * (idx));
  }
  return sequenceArray;
}

function sequence2(times, startingNumber) {
  return Array(times).fill(1).map((_, idx) => (idx + 1) * startingNumber);
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
console.log(sequence2(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7));         // [-7, -14, -21, -28]
console.log(sequence2(3, 0));          // [0, 0, 0]
console.log(sequence2(0, 1000000));    // []