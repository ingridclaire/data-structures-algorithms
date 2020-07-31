const capitalizeWords = (array) => {
  if (array.length === 0) return [];
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
}

//TESTING

console.log(capitalizeWords(['ingrid', 'ryan', 'wes']))