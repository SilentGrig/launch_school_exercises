function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  let first = 1;
  let second = 1;
  for (let counter = 3; counter <= nth; counter++) {
    [first, second] = [second, first + second];
  }
  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050