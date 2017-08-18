// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

// #1: Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peoplesAges`.
// Type your solution immediately below this line:

function getAges(people, age) {
    var peoplesAges = [people.age]
    return peoplesAges

}


// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are older than 35. Assign the returned array
// to a variable called `peopleOlderThan35`.
// Type your solution immediately below this line:
