const reverseString = function(str) {
  let newStr = str.split('');
  let revStr = newStr.reverse();

  return revStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
