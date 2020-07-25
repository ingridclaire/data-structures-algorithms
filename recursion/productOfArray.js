const productOfArray = (array) => {
  if (array.length === 0) return 1;
  let copy = array.slice();
  copy.pop();
  return array[array.length - 1] * productOfArray(copy);
}

// TESTING

console.log(productOfArray([1, 2, 3, 10]));