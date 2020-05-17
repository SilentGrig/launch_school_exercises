function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

function power(base, power) {
  let total = base;
  for (let iter = 2; iter <= power; iter++) {
    total = multiply(total, base);
  }
  return total;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(power(5, 2) === 25); // logs true
console.log(power(2, 4) === 16); // logs true