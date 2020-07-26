const flatten = (array) => {
  let result = [];
  const recurse = (input) => {
    if (input.length === 0) return;
    for (let i = 0; i < input.length; i++) {
      if (!Array.isArray(input[i])) {
        result.push(input[i]);
      } else {
        recurse(input[i]);
      }
    }
  }
  recurse(array)
  return result;
}

// TESTING
console.log(flatten([[[[1],2]], [3,4]]));