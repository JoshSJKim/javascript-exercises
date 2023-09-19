/* Method 2 
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');
*/

/* Method 3
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
*/

// Using named function for above three methods


function alertFunction() {
  alert("Yay! You did it!");
};


// Named function method for method 2
// btn.onclick = alertFunction;

// Named function method for method 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
