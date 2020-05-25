const MINUTES_IN_DAY = 24 * 60;

function afterMidnight(time) {
  const [hours, minutes] = getHoursAndMinutes(time);
  return timeInMinutes(hours, minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(time) {
  const [hours, minutes] = getHoursAndMinutes(time);
  return (MINUTES_IN_DAY - timeInMinutes(hours, minutes)) % MINUTES_IN_DAY;
}

function getHoursAndMinutes(time) {
  const [hours, minutes] = time.split(':');
  return [Number(hours), Number(minutes)];
}

function timeInMinutes(hours, minutes) {
  return (hours * 60) + minutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);