var fibonacci = (function initialiseMemo() {
  var memo = { 1: 1, 2: 1};

  return recursion;

  function recursion(nth) {
    let result = memo[nth] || recursion(nth - 1) + recursion(nth - 2);
    return result;
  }
})();

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765