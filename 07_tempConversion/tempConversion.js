const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(1);
};

// I was sure this was going to work. But it failed miserably.
// The result returns a string, not a number.
// Also, it shouldn't provide a decimal if it is a whole number (.0 not required)
// Apparently, there are some known glitches with `toFixed()`.

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
