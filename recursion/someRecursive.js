const someRecursive = (array, callback) => {
  if (array.length === 0) return false;
  if (callback(array[array.length - 1])) return true;
  array.pop();
  return someRecursive(array, callback);
}

const isOdd = (num) => {
  return num % 2 !== 0;
}

// TESTING
// console.log(isOdd(5))
console.log(someRecursive([4, 2, 12, 14, 18, 16, 18, 6, 8], isOdd))