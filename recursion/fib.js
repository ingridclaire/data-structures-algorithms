const fib = (num) => {
  let sequence = [1, 1];
  const recursive = (num1, num2) => {
    if (sequence.length === num) return sequence[sequence.length - 1];
    sequence.push(num1 + num2);
    return recursive(num2, num1 + num2);
  }
  return recursive(1, 1);
}

// TESTING

console.log(fib(35));