

function findFibonacciIndexByLength(numberOfDigits) {
  let last = 1;
  let fib = 1;
  let idx = 2;

  while (String(fib).length < numberOfDigits) {
    let newFib = fib + last;
    if (newFib > Number.MAX_SAFE_INTEGER) {
      console.log('Error, calculated number is no longer accurate');
      return;
    }
    last = fib;
    fib = newFib;
    idx++;
  }

  return idx;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
console.log(findFibonacciIndexByLength(19));      // error