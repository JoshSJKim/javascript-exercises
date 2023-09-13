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

const removeFromArray = function(arr, ...toRemove) {  // use rest parameter to create an array for multiple arguments

    for (let i = 0; i < toRemove.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (toRemove[i] === arr[j]) {
          arr.splice(j, 1); // I've been using `arr[j-1]` thinking that it will compensate for the 0-based indexing
                            // but I needed to provide the index value, not the element itself
          j--;              // decrement `j` to account for removed element
        }
      }
  }
  return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
