function triangle(...angles) {
  if (isValidTriangle(angles)) {
    return typeOfTriangle(angles);
  } else {
    return 'invalid';
  }
}

function isValidTriangle(angles) {
  let totalAngles = angles.reduce((total, angle) => total + angle);

  let allNonZero = angles.every(angle => angle > 0);

  return totalAngles === 180 && allNonZero;
}

function typeOfTriangle(angles) {
  if (isRightTriangle(angles)) {
    return 'right';
  } else if (isAcuteTriangle(angles)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function isRightTriangle(angles) {
  return angles.some(angle => angle === 90);
}

function isAcuteTriangle(angles) {
  return angles.every(angle => angle < 90);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"