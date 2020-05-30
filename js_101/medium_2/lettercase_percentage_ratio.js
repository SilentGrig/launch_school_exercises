// input - a string of characters with at least one character
// output - an object with percentages of characters that are lowercase,
// uppercase or neither

// count the number of lowercase and uppercase charactesr in the string
// divide by length of string and multiply by 100 to get percentage
// return the object
// neither will be remainder of lowercase and uppercase

console.log(letterPercentages2('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages2('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages2('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages2(string) {
  return {
    lowercase: getPercentage(string, /[a-z]/g),
    uppercase: getPercentage(string, /[A-Z]/g),
    neither: getPercentage(string, /[^a-z]/gi)
  }
}

function getPercentage(string, regex) {
  let counts = (string.match(regex) || []).length;
  return ((counts / string.length) * 100).toFixed(2);
}

function letterPercentages(string) {
  let counts = getLowerUpperCaseCounts(string);

  let percentages = {};

  Object.entries(counts).forEach(([type, count]) => {
    percentages[type] = ((count / string.length) * 100).toFixed(2);
  });

  return percentages;
}

function getLowerUpperCaseCounts(string) {
  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  [...string].forEach(char => {
    if (isLowerCase(char)) {
      counts.lowercase += 1;
    } else if (isUpperCase(char)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  });

  return counts;
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}