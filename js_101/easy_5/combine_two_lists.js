function interleave(array1, array2) {
  const outputArray = [];
  for (let idx = 0; idx < array1.length; idx++) {
    outputArray.push(array1[idx], array2[idx]);
  }
  return outputArray;
}

function interleave2(array1, array2) {
  const outputArray = [];
  array1.forEach((element, index) => {
    outputArray.push(element, array2[index]);
  })
  return outputArray;
}

function interleave3(array1, array2) {
  return array1.reduce((interleavedArray, next, idx) => {
    return interleavedArray.concat(next, array2[idx]);
  }, []);
}

function interleave4(array1, array2) {
  return [].concat(...array1.map((element, index) => {
    return [element, array2[index]];
  }));
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave3([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave4([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]