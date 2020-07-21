//write a function that calculate the sum of all numbers from 1 up to and including some number n

const addAll = (n) => {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const addAllAlt = (n) => {
  return (n * (n + 1)) / 2
}

// LINEAR TIME

const logAtLeast5 = (n) => {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

//TESTING

// console.log(addAll(10000));
// console.log(addAllAlt(10000))
logAtLeast5(10);