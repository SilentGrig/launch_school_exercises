const readline = require('readline-sync');

function calculateSum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

function calculateSumArray(array) {
  return array.reduce((total, number) => total + number, 0);
}

function calculateProductArray(array) {
  return array.reduce((total, number) => total * number, 1);
}

function calculateProduct(num) {
  total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
}

let maxInteger = parseInt(readline.question(
  'Please enter an integer greater than 0: '
), 10);

let operation = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

if (operation === 's') {
  console.log(
    `The sum of the integers between 1 and ${maxInteger} is ${calculateSum(maxInteger)}.`
  );
} else if (operation === 'p') {
  console.log(
    `The product of the integers between 1 and ${maxInteger} is ${calculateProduct(maxInteger)}.`
  );
} else {
  console.log("Sorry, I don't know that operation!");
}

// console.log(`Sum of 1 to 5 is ${calculateSumArray([1,2,3,4,5])}`);
// console.log(`Product of 1 to 6 is ${calculateProductArray([1,2,3,4,5,6])}`)
