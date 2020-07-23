// implement a cuntion call countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// O - a single integer representing total unique values
// I - a sorted array of integers
// C - at worst linear time
// E -

// create pointer at -infinity to represent starting comparison point
// set counter variable to 0 to keep track
// loop through array while i < array.length
  // if array at i is greater than pointer,
    //reset pointer and
    // increment counter

const countUniqueValues = (array) => {
  let pointer = -Infinity;
  let counter = 0;
  let i = 0;

  while (i < array.length) {
    if (array[i] > pointer) {
      pointer = array[i];
      counter++;
    }
    i++;
  }
  return counter;
}

// TESTING

console.log(countUniqueValues([-1, 0, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1, 2]))