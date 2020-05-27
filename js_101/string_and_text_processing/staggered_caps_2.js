function staggeredCase(text) {
  var counter = 0;

  return text
    .split('')
    .map(char => {
      if (!/[a-z]/i.test(char)) return char;

      let newChar;
      if (counter % 2 === 0) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      counter++;
      return newChar;
    })
    .join('');
}

function staggeredCase2(text, includeNonAlphabeticChars = false) {
  var counter = 0;

  return text
    .split('')
    .map(char => {
      let newChar;
      if (!/[a-z]/i.test(char)) {
        if (includeNonAlphabeticChars) counter++;
        return char;
      }

      if (counter % 2 === 0) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      counter++;
      return newChar;
    })
    .join('');
}

console.log(staggeredCase2('I Love Launch School!', true) === "I LoVe lAuNcH ScHoOl!");        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS', true) === "AlL_CaPs");                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 444 numbers', true) === "IgNoRe 77 ThE 444 NuMbErS"); 

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);