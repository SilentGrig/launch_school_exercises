function dms(number) {
  number %= 360;

  if (number < 0) {
    number = 360 + number;
  }

  const degrees = Math.floor(number);

  const minutesFloatingPoint = (number - degrees) * 60;
  const minutes = Math.floor(minutesFloatingPoint);

  const secondsFloatingPoint = (minutesFloatingPoint - minutes) * 60;
  const seconds = Math.floor(secondsFloatingPoint);

  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(seconds).padStart(2, '0');

  return `${degrees}${String.fromCodePoint(176)}${minutesString}'${secondsString}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"