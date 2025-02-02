
const sumAll = function(...args) {
  args.sort((a, b) => a - b); // args.sort() converts elements to strings by default, which may result in incorrect sorting.
                              // The above sort method ensures correct numerical sorting.

  let result = 0; // initialize `result` WITHIN the function to ensure that it starts at 0 on each function call
                  // if initialized outside of the function (globally), the result of the first function call will remain for the second call
  let i = args[0];

  if (
    (typeof args[0] !== "number" || typeof args[1] !== "number") ||  // Added an if statement to check if the arguments are actual passable numbers.
    (args[0] < 0 || args[1] < 0)                                     // Wish I could write this more efficiently
  ) {
    return "ERROR";
    
  }
  while (i <= args[1]) {
    result += i;
    i++;
  }
  return result;

};

// This code works for the first three tests, but not the rest
// Updated code with the if statement works for all tests

// Do not edit below this line
module.exports = sumAll;
