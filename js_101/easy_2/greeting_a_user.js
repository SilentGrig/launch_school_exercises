const readline = require('readline-sync');

let name = readline.question('What is your name? ');
let nameWithoutBang = name.replace(/!/g, ''); 

let response = `Hello ${nameWithoutBang}.`;

if (name.endsWith('!')) {
  console.log(`${response} why are we screaming?`.toUpperCase());
} else {
  console.log(response);
}