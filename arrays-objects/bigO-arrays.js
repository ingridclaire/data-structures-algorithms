// ARRAYS
// if you need order
// even if you do need order, you could use linked lists that can perform better than arrays
// when you need fast access - objects
// access at a specific index = O(1)
//adding/removing from beginning of array is not efficient - O(n)
// search is always O(n) for unsorted arrays

let names = ["Michael", "Melissa", "Andrea"]

names.push("Raj") // O(1)

names.pop("Raj") // O(1)

names.shift("Raj") //O(n)

names.unshift("Raj") // O(n)

names.concat(["Bob", "Andy", "Joe"]) //O(n)

names.slice() // O(n)

names.splice() // O(n)

names.forEach() // O(n) (also map, filter, reduce, etc)

