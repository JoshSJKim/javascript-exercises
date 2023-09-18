const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';



const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.setAttribute("style", "color: red;");

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.setAttribute('style', 'color: blue;');

const boxDiv = document.createElement("div");
boxDiv.setAttribute("style", "border: 2px solid black; background-color: pink;");

const divText = document.createElement("h1");
divText.textContent = "I'm in a div";

const divTextTwo = document.createElement("p");
divTextTwo.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
boxDiv.appendChild(divText);
boxDiv.appendChild(divTextTwo);
container.appendChild(boxDiv);
