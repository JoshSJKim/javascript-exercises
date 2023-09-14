const leapYears = function(year) {
  if ( year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0){
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// It was a bit tricky to get the sequence of the conditions in right order.
// Then I looked at the actual solution and my logic is broken
// Code still works, but it's inefficient

// Do not edit below this line
module.exports = leapYears;
