const swap = (array, i, j) => {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const pivot = (array, start=0, end=array.length + 1) => {
  // set variable for pivot point (first item in array);
  let pivot = array[start];
  // store current pivot index in variable
  let pivotIndex = start;
  // loop through array
  for (let i = start + 1; i < array.length; i++) {
    // if pivot is greater than current el
    if (pivot > array[i]) {
      // increment pivot index
      pivotIndex++;
      swap(array, pivotIndex, i);
    }
  }
  swap(array, start, pivotIndex);
  return pivotIndex;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let midpoint = pivot(array, left, right);

    quickSort(array, left, midpoint - 1);
    quickSort(array, midpoint + 1, right);
  }
  return array;
}

const arr1 = [43, 99, 12, -4, 100, 77, 21, 87, 40];
// console.log(pivot(arr1, 0, arr1.length));
console.log(quickSort(arr1));