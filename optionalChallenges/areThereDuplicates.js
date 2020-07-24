// implement a fucntion called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve using frequency counter OR multiple pointers.

// O - boolean
// I - variable number of arguments
// C - O(n) time and space complexity
// E - can input be any type and any length? are arrays/objects valid inputs?

// PLAN
// put all arguments into counter object
// if ever a property goes above 1, return false
// return true at end

// PSEUDO
// set counter obj variable
// convert arguments to an array
// loop through args array
  // if key doesn't exist on counter obj, add with value 1
  // if key already exists, return false
// return true

const areThereDuplicates = (...args) => {
  // let counter = {};
  // for (let i = 0; i < args.length; i++) {
  //   let item = args[i];
  //   if (!counter[item]) {
  //     counter[item] = 1;
  //   } else {
  //     return true
  //   }
  // }
  // return false;
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 2, 3, 'abscz', 'a', 'b', 'abscz'))