function runningTotal(numbers) {
  let runningTotals = [];
  numbers.forEach(number => {
    let newNumber = number + (runningTotals[runningTotals.length - 1] || 0);
    runningTotals.push(newNumber);
  });
  return runningTotals;
}

function runningTotal2(numbers) {
  return numbers.reduce((runningTotals, number) => {
    let newNumber = number + (runningTotals[runningTotals.length - 1] || 0);
    return runningTotals.concat(newNumber);
  }, []);
}

function runningTotal3(numbers) {
  return numbers.map((number, idx, array) => {
    return array.slice(0, idx).reduce((sum, num) => sum + num, 0) + number;
  });
}

function runningTotal4(numbers) {
  let sum = 0;
  return numbers.map(number => {
    sum += number;
    return  sum;
  });
}

console.log(runningTotal4([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal4([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal4([3]));                    // [3]
console.log(runningTotal4([]));                     // []