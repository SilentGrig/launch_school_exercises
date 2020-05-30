// input - 3 numbers
// output - type of triangle or invalid

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(4, 4, 6));        // "isosceles"

// eslint-disable-next-line max-lines-per-function
function triangle(...sides) {
  // sort sides from shortest to longest
  sides.sort((a, b) => a - b);

  if (sides.length === 3 && isValidTriangle(sides[0], sides[1], sides[2])) {
    return getTriangleType(...sides); 
  } else {
    return 'invalid';
  }  
}

function isValidTriangle(shortest, middle, longest) {
  return shortest > 0 && (shortest + middle) > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
