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

/*
function alertFunction() {
  alert("Yay! You did it!");
};
*/


// Named function method for method 2
// btn.onclick = alertFunction;

// Named function method for method 3
//btn.addEventListener('click', alertFunction); // calls the alertFunction()


// Below explains passing a parameter to the function that we are calling and its uses

/*
The 'e' is an object that references the EVENT itself.
It displays many useful properties and methods (functions that live inside an object)

btn.addEventListener('click', function (e) {
  console.log(e);
})
*/

/* 
'e.target' will display the DOM node that was triggered

btn.addEventListener('click', function (e) {
  console.log(e.target);
})
*/

/*
You can change the style of a DOM node directly by using the event listener

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue'; This will change the background color of the button to blue
});
*/
