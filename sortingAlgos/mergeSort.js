const mergeSorted = (arr1, arr2) => {
  // set an empty array to collect merged items
  let merged = [];
  // set tracker for arr1 index
  let left = 0;
  // set tracker for arr2 index
  let right = 0;
  // run loop while index of both is less than length of both
  while (left < arr1.length && right < arr2.length) {
    // compare arr1[index] to arr2[index]
    if (arr1[left] <= arr2[right]) {
      // push the smaller one into result array
      merged.push(arr1[left]);
      // increment corresponding index
      left++;
    } else {
      merged.push(arr2[right]);
      right++;
    }
  }
  // check if one of the arrays has remaining elements
  if (left === arr1.length) {
    // if one does, concat it to the result array and return
    return merged.concat(arr2.slice(right));
  } else if (right === arr2.length) {
    return merged.concat(arr1.slice(left));
  }
}

let first = [1, 10, 50, 60, 70, 110];
let second = [-134, -2, 0, 14, 50, 77, 84, 98, 99, 100];

console.log(mergeSorted(first, second));