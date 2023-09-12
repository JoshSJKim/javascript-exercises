/*
let removedArr = [];

const removeFromArray = function(arr, remove) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === remove) {
      removedArr = arr.splice(arr[i-1], 1)  // 'arr[i-1]' is to get the correct index value to compensate for 0 based indexing
    }
  }
  return arr;
};

//This code works for the first test, but not the rest.
*/

/*
const removeFromArray = function(arr, remove) {
  let newArr = arr.filter(item => item !== remove);  // use filter method.
  return newArr;
}

// This code works for test 1 and 3, but not the rest
// I need to find a way to deal with multiple arguments for 'remove', as well as cases where the 'remove' arguments are not in sequential order
*/

// Do not edit below this line
module.exports = removeFromArray;
