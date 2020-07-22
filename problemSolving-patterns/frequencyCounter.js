// write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the the second array. The frequency of values must be the same.

// O - boolean
// I - two arrays
// C - strive for O(n) time complexity
// E - arr1 = [1, 2, 3, 4], arr2 = [1, 4, 9, 16] => true

// confirm that number of values is same in both
// check each item in first array - look for its squared value in second array
  // if squared value is not found, function will return false
  // if it never comes back false, it will return true at end

// PSEUDOCODE

// set variable for an empty obj
// set another variable for another empty obj
// loop through first array, adding each element as a key with either 1 or current + 1 to first obj
// loop through second array, adding each element as a key with either 1 or current + 1 to second obj
// loop through first array
  // at each index, check if the value at its key in first obj is equal to the value at its corresponding key in second obj
    //if

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  };

  let obj1 = {};
  let obj2 = {};

  arr1.forEach(val => obj1[val] = (obj1[val] || 0) + 1);
  arr2.forEach(val => obj2[val] = (obj2[val] || 0) + 1);

  for (element of arr1) {
    let squared = element ** 2;
    if (obj1[element] !== obj2[squared]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 1, 2, 3, 4, 4, 5, 5, 6], [1, 36, 9, 16, 16, 25, 25, 4, 1]));