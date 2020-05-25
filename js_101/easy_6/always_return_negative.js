function negative(number) {
  return -Math.abs(number);
}

function negative2(number) {
  return number < 0 ? number : number * -1;
}

console.log(negative2(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative2(0));     // -0

console.log(Object.is(0, -0) === false);