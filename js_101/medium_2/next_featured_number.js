function featured(number) {
  const MAX_FEATURED_NUMBER = 9876543201;
  for (let testNumber = getNextOddFactorOfSeven(number);
    testNumber <= MAX_FEATURED_NUMBER;
    testNumber += 14) {
    if (isFeaturedNumber(testNumber)) {
      return testNumber;
    }
  }

  return 'There is no possible that fulfilled those requirements';
}

function isFeaturedNumber(number) {
  if (number % 2 === 0 || number % 7 !== 0) {
    return false;
  }
  return getDigitCounts(number).every(count => count <= 1);
}

function getNextOddFactorOfSeven(number) {
  let factorOfSeven = (7 - (number % 7)) + number;
  while (factorOfSeven % 2 === 0) {
    factorOfSeven += 7;
  }
  return factorOfSeven;
}

function getDigitCounts(number) {
  let stringNumber = String(number);
  let digitCounts = {};
  [...stringNumber].forEach(digit => {
    digitCounts[digit] = (digitCounts[digit] || 0) + 1;
  });
  return Object.values(digitCounts);
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."