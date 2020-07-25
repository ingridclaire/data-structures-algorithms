const reverse = (string) => {
  let result = '';
  const recurse = (input) => {
    if (input.length === 0) return;
    result += (input[input.length - 1]);
    recurse(input.slice(0, input.length - 1));
  }
  recurse(string);
  return result;
}

// TESTING
console.log(reverse('awesome'));