// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// set variable for max sum
// set variable for temp sum
// loop through array up to not incl n
  // sum values, setting equal to max sum and temp sum
// loop through array from num to end of array - num
  // subtract the value at current index - n from temp sum and add current value
  // if temp sum is greater than max sum, reset max sum to equal it
// return max sum

const maxSubarraySum = (array, n) => {
  let max;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp += array[i];
  }
  max = temp;

  for (let i = n; i < array.length; i++) {
    temp = temp - array[i - n] + array[i];
    max = Math.max(temp, max);
    }
  return max;
}

// TESTING

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)