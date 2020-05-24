function countOccurrences(list) {
  const counts = {};
  list.forEach(item => {
    item = item.toLowerCase();
    (counts[item] = (counts[item] || 0) + 1)
  });
  Object.entries(counts)
    .forEach(([item, count]) => console.log(`${item} => ${count}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);