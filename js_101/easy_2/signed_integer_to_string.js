const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let string = '';

  do {
    let digit = number % 10;
    string = DIGITS[digit] + string;
    number = Math.floor(number / 10);
  } while (number > 0);

  return string;
}

function signedIntegerToString(number) {
  if (number === 0) {
    return '0';
  } else if (number > 0) {
    return `+${integerToString(number)}`;
  } else {
    return `-${integerToString(-number)}`;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");