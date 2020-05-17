function multisum(targetNumber) {
  let sequence = [3, 2, 1, 3, 1, 2, 3];
  let sum = 0;
  let currentMultiple = 0;

  for (let iter = 0; ; iter += 1) {
    currentMultiple += sequence[iter % sequence.length];
    if (currentMultiple > targetNumber) {
      break;
    }
    sum += currentMultiple;
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168