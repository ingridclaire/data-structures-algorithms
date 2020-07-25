const iterativeFactorial = (num) => {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--
  }
  return result;
}

const recursiveFactorial = (num) => {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}
//TESTING
// console.log(iterativeFactorial(6));
console.log(recursiveFactorial(6))