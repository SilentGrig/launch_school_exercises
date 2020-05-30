function sumSquareDifference(number) {
  let range = getRange(number);
  let sumSquare = range.reduce((sum, num) => sum + num) ** 2;
  let squareSum = range.reduce((sum, num) => sum + (num ** 2), 0);
  return sumSquare - squareSum;
}

function getRange(number) {
  return [...Array(number).keys()].map(idx => idx + 1);
}

function sumSquareDifference2(maxNumber) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= maxNumber; number++) {
    sum += number;
    sumOfSquares += (number ** 2);
  }
  return (sum ** 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

console.log(sumSquareDifference2(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference2(10));     // 2640
console.log(sumSquareDifference2(1));      // 0
console.log(sumSquareDifference2(100));    // 25164150