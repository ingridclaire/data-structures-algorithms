//write a function that calculate the sum of all numbers from 1 up to and including some number n

const addAll = (n) => {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addAll(1));