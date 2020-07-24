// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Function must have O(n) time complexity.

// O - boolean
// I - two integers
// C - linear time complexity
// E - 182, 281 => true; 22, 222 => false

// PLAN

// convert to strings
// create a counter object and loop through string to catalog counts
// loop through second string, decrementing corresponding counter as you come across each digit
  // if ever a digit doesn't exist on counter object, or counter is 0, return false
// return true if is hasn't returned false

const sameFrequency = (first, second) => {
  first = first.toString();
  second = second.toString();

  if (first.length !== second.length) return false;

  let counter = {};

  for (let char of first) {
    !counter[char] ? counter[char] = 1 : counter[char]++;
  }
  for (let char of second) {
    if (!counter[char] || counter[char] === 0) return false;

    counter[char]--;
  }
  return true;
}

// TESTING

console.log(sameFrequency(22, 222))