function multiplyLists(array1, array2) {
  return array1.map((number1, idx) => number1 * array2[idx]);
}

console.log(multiplyLists([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]