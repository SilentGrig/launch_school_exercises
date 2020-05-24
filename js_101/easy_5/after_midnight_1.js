function timeOfDay(minutes) {
  const MINUTES_IN_DAY = 24 * 60;

  minutes %= MINUTES_IN_DAY;

  if (minutes < 0) {
    minutes = MINUTES_IN_DAY + minutes;
  }

  const hours = Math.floor(minutes / 60);
  const remainderMinutes = Math.floor(minutes % 60);

  return formatTime(hours, remainderMinutes);
}

function formatTime(hours, minutes) {
  const hoursString = String(hours).padStart(2, '0');
  const minutesString = String(minutes).padStart(2, '0');
  return `${hoursString}:${minutesString}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");