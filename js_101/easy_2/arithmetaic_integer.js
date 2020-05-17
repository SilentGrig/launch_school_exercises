const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt('Enter the first number:');
let integer1 = parseInt(readline.prompt(), 10);

prompt('Enter the second number:');
let integer2 = parseInt(readline.prompt(), 10);

prompt(`${integer1} + ${integer2} = ${integer1 + integer2}`);
prompt(`${integer1} - ${integer2} = ${integer1 - integer2}`);
prompt(`${integer1} * ${integer2} = ${integer1 * integer2}`);
prompt(`${integer1} / ${integer2} = ${integer1 / integer2}`);
prompt(`${integer1} % ${integer2} = ${integer1 % integer2}`);
prompt(`${integer1} ** ${integer2} = ${integer1 ** integer2}`);
