// given two string, write a function that determines if the second string is an anagram of the first.

// count number of each letter in each string
//compare numbers in string 1 to string 2
// strings need to be same length

// O - boolean
// I - two strings
// C - linear time complexity
// E - spaces? case sensitive? only letters?

// check that strings are equal in length
// put character counts for both strings into objects
// create array of keys for one object and check that counts are same in both objects
// if no false has been returned, return true

const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  if (string1.length === 0 && string2.length === 0) {
    return true;
  }

  let counter1 = {};
  let counter2 = {};

  for (var char of string1) {
    !counter1[char] ? counter1[char] = 1 : counter1[char]++;
  }
  for (var char of string2) {
    !counter2[char] ? counter2[char] = 1 : counter2[char]++;
  }

  let keysArr = Object.keys(counter1);

  for (var char of keysArr) {
    if (counter1[char] !== counter2[char]) {
      return false;
    }
  }

  return true;
}

// TESTING

console.log(isAnagram('awesome', 'eomesaw'))