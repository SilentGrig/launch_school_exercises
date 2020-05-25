function swapName(fullName) {
  const [firstName, lastName] = fullName.split(' ');
  return `${lastName}, ${firstName}`;
}

function swapName2(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

function swapNameRefactor(fullName) {
  const names = fullName.split(' ');
  const lastName = names.slice(-1);
  const firstNames = names.slice(0, -1);
  return `${lastName}, ${firstNames.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName2('Joe Roberts'));    // "Roberts, Joe"
console.log(swapNameRefactor('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"