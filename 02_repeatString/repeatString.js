const repeatString = function(str, repeat) {

  let output = "";

  if (repeat < 0) {
    return "ERROR";
  }

  while (repeat > 0) {
    output = output += str;
    repeat--;
  };

  return output;

};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
