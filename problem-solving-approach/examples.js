// write a function which takes in a string and returns counts of each character in the string
/*
I - string
O - object with character counts?
C - no more than linear time complexity
E - case sensitive? spaces? numbers?
input = "ingrid"
output = {i: 2, n: 1, g: 1, r: 1, d: 1}
input = "monopoly"
output = {m: 1, o: 3, n: 1, p: 1, l: 1, y: 1}
input: ""
output: ?
*/

const charCount = (string) => {
  let spacesRemoved = string.split(' ').join('');
  let counts = {};
  for (char of spacesRemoved) {
    char = char.toLowerCase();
    counts[lowerCase] ? counts[lowerCase]++ : counts[lowerCase] = 1;
  }
  return counts;
}

// TESTING

console.log(charCount("Hi ingrid how are you"));
