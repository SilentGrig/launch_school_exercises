function buyFruit(groceryList) {
  return [...groceryList.map(
    ([fruit, quantity]) => Array(quantity).fill(fruit)
  )].flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]