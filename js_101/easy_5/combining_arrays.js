function union(array1, array2) {
  const unionArray = [];

  array1.forEach(element => {
    if (!unionArray.includes(element)) {
      unionArray.push(element);
    }
  });
  array2.forEach(element => {
    if (!unionArray.includes(element)) {
      unionArray.push(element);
    }
  });

  return unionArray;
}

function union2(array1, array2) {
  const unionObject = {};

  array1.forEach(element => {
    unionObject[element] = true;
  });
  array2.forEach(element => {
    unionObject[element] = true;
  });

  return Object.keys(unionObject).map(Number);
}

function union3() {
  const unionObject = {};

  for (let idx = 0; idx < arguments.length; idx++) {
    arguments[idx].forEach(element => (unionObject[element] = true));
  }

  return Object.keys(unionObject).map(Number);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union3([1, 3, 5], [3, 6, 9], [4, 5, 9]));    // [1, 3, 5, 6, 9]