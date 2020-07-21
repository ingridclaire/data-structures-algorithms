// objects:
/*
- when you don't need order
- when you need fast access/insertion/removal
- adding, removing, retrieving is all consant time O(n)
- searching is linear O(n)
*/

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
}

Object.keys(instructor) //O(n)

Object.entries(instructor) //O(n)

Object.hasOwnProperty("firstName") //O(1)
