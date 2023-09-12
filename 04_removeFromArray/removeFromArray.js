let removedArr = [];

const removeFromArray = function(arr, remove) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === remove) {
      removedArr = arr.splice(arr[i-1], 1)  // 'arr[i-1]' is to get the correct index value to compensate for 0 based indexing
    }
  }
  return arr;
};

// This code works for the first test, but not the rest.

// Do not edit below this line
module.exports = removeFromArray;
