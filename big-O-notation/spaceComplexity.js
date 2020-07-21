//O(n)
const double = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(2 * array[i])
  }
  return newArray;
}


// TESTING

console.log(double([1, 2, 3, 4]));