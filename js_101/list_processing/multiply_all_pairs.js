function multiplyAllPairs(array1, array2) {
  let multiplesArray = [];
  for (let idx1 = 0; idx1 < array1.length; idx1++) {
    for (let idx2 = 0; idx2 < array2.length; idx2++) {
      let product = array1[idx1] * array2[idx2];
      insertNumberAscending(multiplesArray, product);
    }
  }
  return multiplesArray;
}

function multiplyAllPairs2(array1, array2) {
  let productsArray = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      let product = number1 * number2;
      insertNumberAscending(productsArray, product);
    });
  });
  return productsArray;
}

function insertNumberAscending(array, number) {
  var idx = 0;
  while (idx < array.length) {
    let element = array[idx];
    if (number < element) {
      break;
    }
    idx++;
  }
  array.splice(idx, 0, number);
}

function insertNumberAscending2(array, number) {
  let index = array.findIndex((element) => number < element);
  return array
    .slice(0, (index === -1 ? array.length : index))
    .concat(number)
    .concat(array.slice(index === -1 ? array.length : index));
}

function multiplyAllPairs3(array1, array2) {
  let multiplesArray = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      multiplesArray.push(number1 * number2)
    });
  });
  return multiplesArray.sort((a, b) => a - b);
}

function multiplyAllPairs4(array1, array2) {
  let multiplesArray = [];
  array1.forEach(number1 => array2.forEach(
    number2 => (multiplesArray = insertNumberAscending2(multiplesArray,
      number1 * number2))
  ));
  return multiplesArray;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs3([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs4([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]