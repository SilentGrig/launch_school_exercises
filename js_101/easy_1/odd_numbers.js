function oddNumbersOne() {
  for (let num = 1; num < 100; num += 2) {
    console.log(num);
  }
}

function oddNumbersTwo(start, finish) {
  for (let num = start; num <= finish; num++) {
    if (Math.abs(num) % 2 === 1) {
      console.log(num);
    }
  }
}

oddNumbersTwo(1, 99);