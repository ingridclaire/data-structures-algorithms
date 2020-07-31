const nestedEvenSum = (obj, sum=0) => {
    for (var key in obj) {
      if (isEvenNumber(obj[key])) {
        sum += obj[key];
      } else if (typeof obj[key] === 'object') {
        sum += nestedEvenSum(obj[key]);
      }
    }
    return sum;
}

const isEvenNumber = (val) => {
  if (typeof val !== 'number') return false;
  return val % 2 === 0;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2))