// given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// set a pointer equal to 0
// find mid point of array
// check if target is greater than or less than mipoint number
// reset pointer to start of half
// find new midpoint and check if target is greater than or equal to new midpoint
// rest pointer to start of half
// ....continue pattern

const search = (array, target) => {
  let midpoint;
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    midpoint = start + Math.ceil((end - start) / 2)
    if (target < array[midpoint]) {
      end = midpoint - 1;
    } else if (target > array[midpoint]) {
      start = midpoint;
    } else {
      return midpoint;
    }
  }
  return -1;
}

// TESTING

console.log(search ([1, 2, 3, 4, 5, 6, 7], 7));