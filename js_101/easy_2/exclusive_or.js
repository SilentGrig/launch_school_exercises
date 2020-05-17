function xor(input1, input2) {
  // crash course video on logic gates
  return (input1 || input2) && !(input1 && input2);
}

function xor2(input1, input2) {
  return (input1 && !input2) || (!input1 && input2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

console.log(xor2(5, 0) === true);
console.log(xor2(false, true) === true);
console.log(xor2(1, 1) === false);
console.log(xor2(true, true) === false);