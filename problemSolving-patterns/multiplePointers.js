// writre a function called sumZero which acepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// set right and left start indices
// set result empty array
// loop the length of the array
  // add values at right/left indices to check if they equal zero
  // if result is less than zero, increment left side
  // if greater than zero, increment right side
  // if they equal zero, push values at those indices to result array
// if length of array does not equal zero, return result array
  //otherwise return undefined

  const sumZero = (array) => {
    let lIndex = 0;
    let rIndex = array.length - 1;
    let result = [];

    while (lIndex < rIndex) {
      if (array[rIndex] + array[lIndex] === 0) {
        return [array[lIndex], array[rIndex]];
      } else {
        array[rIndex] + array[lIndex] > 0 ? rIndex-- : lIndex++;
      }
    }
  }

  // TESTING

  console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 6]))