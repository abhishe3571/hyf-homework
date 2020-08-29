/* 
// Delay clicker
Create a button in html with the text "Log in 3 seconds"

When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".
Page onload
*/
const myButton = document.querySelector("button");
myButton.addEventListener("click", setTimeout);

setTimeout(() => {
  console.log("This text was delayed by 3 seconds");
}, 3000);
