/* 
Problem 1: Click counter

  Create an index.html file with two buttons:

    When the button first is clicked it should first log out 0. The next time it is 
    clicked it should log out 1, etc.
    Clicking the second button should also count up and logout the same variable. 
*/

const button = document.querySelector("button#btn1");
const button2 = document.querySelector("button#btn2");
 button.addEventListener("click", clickCounter);
 button2.addEventListener("click", clickCounter);


let count = 0;
function clickCounter() {
  
  console.log(count);
  count++;
}
