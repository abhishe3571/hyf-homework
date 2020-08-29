/*
const rootDiv = document.getElementById('root');

rootDiv.innerText = 'Hello, World!';

const myButton = document.createElement('button');
myButton.innerText = 'Click me!';
rootDiv.appendChild(myButton);

myButton.addEventListener('click', function () {
    const para = document.createElement('p');
    para.innerText = 'You clicked it!';
    rootDiv.appendChild(para);
});
*/
/*
document.getElementById('root').addEventListener('click', myfunction);

function myfunction() {
    document.getElementById('demo').innerHTML = "Hello Word";
}

let x = document.getElementById("root");
x.addEventListener("click", myfunction);
x.addEventListener("click", myfunction1);

function myfunction() {
    alert("hello");
}
function myfunction1() {
    alert("hello1");
}



const myHeading = document.querySelector('h1');
const secondaryHeading = document.querySelector('h1.secondary-heading');

console.log(myHeading);

const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
    secondaryHeading.innerText = `Current time is: ${new Date()}`;
});

const myParagraph = document.createElement('p');
myParagraph.innerText = 'Document object model';
myHeading.insertAdjacentElement("beforeend", myParagraph);

const myGif = document.createElement("img");
myGif.src = "https://media.giphy.com/media/fLpP1CZyzFckyy5bML/giphy.gif";
myGif.style.width = "200px";
myGif.style.height = "200px";
myGif.style.display = "block";

setTimeout(showHappyFace, 2000);

function showHappyFace() {
  myParagraph.appendChild(myGif);
  setTimeout(() => {
    myParagraph.removeChild(myGif);
  }, 3000);
}

*/

// Problem 4: Simple eventlistener

//  When clicking a button, change the text on the button to say "Button clicked"


const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
    myButton.innerText = 'Button clicked'
});