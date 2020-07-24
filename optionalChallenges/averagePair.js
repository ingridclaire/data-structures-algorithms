//write a function called averagePair. Given a softed array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// O - boolean
// I - sorted array of integers and target average
// C - O(n) time O(1) space
// E -

// PLAN
// create left and right pointers
// set target sum of pairs
// if sum of right and left is greater than target, increase left
// otherwise if sum is less than targer, decrease right
// if sum equals target, return true
// return false at end if it hasn't returned true

const averagePair = (array, target) => {
  if (target < array[0] || target > array[array.length - 1] || array.length === 0) {
    return false;
  }

  let sum = target * 2;
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] > sum) {
      right--;
    } else if (array[left] + array[right] < sum) {
      left++;
    } else {
      return true;
    }
    console.log(left, right)
  }
  return false;
}

// TESTING
console.log(averagePair([-1, 3, 4, 5, 6, 8], 5));