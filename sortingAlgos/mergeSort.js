const mergeSorted = (arr1, arr2) => {
  let merged = [];
  let left = 0;
  let right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      merged.push(arr1[left]);
      left++;
    } else {
      merged.push(arr2[right]);
      right++;
    }
  }
  if (left === arr1.length) {
    return merged.concat(arr2.slice(right));
  }
  if (right === arr2.length) {
    return merged.concat(arr1.slice(left));
  }
}

const sort = (array) => {
  // base case: check if array's length is <= 1
    // if yes, return array;
  if (array.length <= 1) {
    return array;
  }
  // set a midpoint variable
  let midpoint = Math.floor(array.length / 2);
  // split array in half using slice and midpoint;
  let first = array.slice(0, midpoint);
  let second = array.slice(midpoint);
  console.log(`--------------\n${first}\n${second}\n----------------`)
  // return: merge the two arrays after they've been passed back into sort
  return mergeSorted(sort(first), sort(second));
}

let first = [75, 1, 99, 32, 10, 3, 18, -1, 55];
let second = [-134, -2, 0, 14, 50, 77, 84, 98, 99, 100];

// console.log(mergeSorted(first, second));

console.log(sort(first));