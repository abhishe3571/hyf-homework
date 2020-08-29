/* Visual promise
This task is about visually understanding the difference between Promise.all and calling a promise 
one at a time.

If you go into the promise-visual homework folder there is some html, css and some js. If you clone 
down the javascript repo, then you can simply copy the files into your hyf-homework js3 week 2 folder. Dont modify move-element.js, only work in main.js!

There is a function available to you called moveElement. calling that function moves an element to a 
new position and returns a promise. moveElement takes a DOM element and an object specifying the x 
and y of the new position. It then returns a promise that resolves after the DOM element has been 
moved.

// This code will move the li to the position 100, 100. Calling moveElement will return a promise 
that resolves after the li element has been moved. 
moveElement(document.querySelector('li'), {x: 100, y: 100})
    .then(() => {
        console.log('Element has been moved');
    });
Your task is to create two functions.

translateOneByOne - Should translate the circles one at a time from their random start position to 
their target see the target positions below. Log something out after each element has been moved
translateAllAtOnce - Should translate all the circles at the same time from their random start 
position to their target. Log out something after all elements have been moved Test that the 
functions works as intended before submitting homework. You decide if you want to do it the promise 
way or the async/await way

Target positions:
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px; 
*/
async function translateOneByOne() {
    try {
      await moveElement(redBox, { x: 20, y: 300 }).then(() => {
        console.log("Element  Red circle has been moved");
      });
  
      await moveElement(blueBox, { x: 400, y: 300 }).then(() => {
        console.log("Element Blue circle has been moved");
      });
  
      await moveElement(greenBox, { x: 400, y: 20 }).then(() => {
        console.log("Element  Green has been moved");
      });
    } catch (error) {
      console.log(`error occurred`, error);
      return;
    }
  }
  
  //translateOneByOne();
  
  function translateAllAtOnce() {
    moveElement(redBox, { x: 20, y: 300 }).then(() => {
      console.log("Element  Red circle has been moved");
    });
  
    moveElement(blueBox, { x: 400, y: 300 }).then(() => {
      console.log("Element   Blue circle has been moved");
    });
  
    moveElement(greenBox, { x: 400, y: 20 }).then(() => {
      console.log("Element  Green circle has been moved");
    });
  }
  
  translateAllAtOnce();
  
//   Promise.all([
//     moveElement(redBox, { x: 20, y: 300 }),
//     moveElement(blueBox, { x: 400, y: 300 }),
//     moveElement(greenBox, { x: 400, y: 20 }),
  
//   ]).then((result) => {
//     console.log(" All element moved at the same time using promise all method");
//   });