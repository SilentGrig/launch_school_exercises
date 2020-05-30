function fridayThe13ths(year) {
  let friday13ths = 0;
  const FRIDAY = 5; // 0 - Sunday, 1 - Month, ...
  for (let month = 0; month < 12; month++) { // months start at 0
    let thirteenthOfMonth = new Date(year, month, 13);
    if (thirteenthOfMonth.getDay() === FRIDAY) friday13ths++;
  }
  return friday13ths;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2