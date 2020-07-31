// given an array of strings, capitalize the first letter of each string in the array

const capitalizeFirst = (array) => {
  if (array.length === 0) return [];
  let capital = array[0][0].toUpperCase();
  let newArray = [capital.concat(array[0].slice(1))];
  return newArray.concat(capitalizeFirst(array.slice(1)));
}

// TESTING

console.log(capitalizeFirst(['ingrid', 'ryan', 'wes', 'faith']))