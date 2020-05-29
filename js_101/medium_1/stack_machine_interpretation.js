// Stack Machine Interpreter

// Input - String of actions
// Output - Potentially printing something to the console

// program has a stack and a register starting with [] and 0 respectively

// Read current command (1)
// perform action based on current command (2)

// (1) split string into a list of commands

// (2) parse command and perform applicable action

// actions

// minilang('PRINT'); 
// 0

// minilang('5 PUSH 3 MULT PRINT'); 
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

// minilang('-3 PUSH 5 SUB PRINT');
// 8

console.log(minilang('6 POP'));
// (nothing is printed because the `program` argument has no `PRINT` commands)

// eslint-disable-next-line max-lines-per-function
function minilang(commands) {
  let commandList = commands.split(' ');
  const commandsThatdontPopStack = ['PUSH', 'PRINT'];

  let stack = [];
  let register = 0;

  var actions = {
    PUSH: push,
    ADD: add,
    SUB: sub,
    MULT: mult,
    DIV: div,
    MOD: mod,
    POP: pop,
    PRINT: print
  };

  while (commandList.length > 0) {
    let command = commandList.shift();
    if (actions.hasOwnProperty(command)) {
      if (!commandsThatdontPopStack.includes(command)) {
        if (isStackEmpty()) {
          return 'error: trying to pop from empty stack';
        }
      }
      actions[command]();
    } else if (!Number.isNaN(Number(command))) {
      register = parseInt(command, 10);
    } else {
      return `error unknown command: ${command}`
    }
  }

  return undefined;

  function push() {
    stack.push(register);
  }

  function add() {
    register += stack.pop();
  }

  function sub() {
    register -= stack.pop();
  }

  function mult() {
    register *= stack.pop();
  }

  function div() {
    register = Math.floor(register / stack.pop());
  }

  function mod() {
    register = Math.floor(register % stack.pop());
  }

  function pop() {
    register = stack.pop();
  }

  function print() {
    console.log(register);
  }

  function isStackEmpty() {
    return stack.length <= 0;
  }
}

