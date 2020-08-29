/*
let x = function () {
  console.log("I am called from inside a function");
};

let y = function (callback) {
  console.log("do something");
  callback();
};

x(y);
///

let add1 = function (a, b) {
  return a + b;
};

let multiply = function (a, b) {
  return a * b;
};

let doWhatEver = function (a, b) {
  console.log(`Here are your two number back ${a}, ${b}`);
};

let calc = function (num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  }
};

console.log(calc(14, 4, add1));
console.log(
  calc(14, 4, function (a, b) {
    return a - b;
  })
);

const greet = (name) => `Hello there, How are you ${name}`;

const add = (a, b) => a + b;

console.log(greet("Abhishek"));
console.log(add(12, 45));

const numbers = [1, 35, 47, 79];
console.log(numbers.reduce(add, 0));

const functionsDict = {
  greetFn: greet,
  addFn: add,
};

console.log(functionsDict["greetFn"]("Abhishek"));
console.log(functionsDict.addFn(12, 45));

const functionRunner = (fn, fnArgs) => {
  if (fnArgs !== undefined) {
    return fn(...fnArgs);
  } else {
    return fn();
  }
};

console.log(functionRunner(() => "Hello Jhon"));

console.log(functionRunner(Math.random));

const functionsArray = [greet, add, (a, b) => a * b];
const argumentsArray = [["Mahesh"], [21, 5], [3, 33]];

functionsArray.forEach((fn, index) => {
  const fnArgs = argumentsArray[index];

  console.log(fn, fnArgs);

  console.log(fn(...fnArgs));
});

/////


const functionRunner = (fn, fnArgs) => {
  if (fnArgs !== undefined) {
    return fn(...fnArgs);
  } else {
    return fn();
  }
};

const delayedFunctionRunner = (fn, fnArgs, delayInMiliSeconds = 5000) => {
  setTimeout(() => {
    console.log(`${delayInMiliSeconds / 1000} second have passed!`);
    functionRunner(fn, fnArgs);
  }, delayInMiliSeconds);
};

const tellMeCurrentTime = () => {
  console.log(`Current time: ${new Date()}`);
};

for (let index = 1; index < 10; index++) {
  const delay = 4 * Math.random() * index * 1000;
  console.log(
    `index=${index}, scheduled to run after: ${delay / 1000} seconds`
  );
  delayedFunctionRunner(tellMeCurrentTime, [], index * 1000);
}

/*tellMeCurrentTime();

 for (let index = 0; index < 10; index++) {
  tellMeCurrentTime();
}
 */


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Track if the buttons have been clicked in the last sec
let btn1Clicked = false;
let btn2Clicked = false;

function listenForClick (e) {
  console.log(e.target.id);
  // Check which button was clicked, and track it
  if(e.target.id === 'btn1')
    btn1Clicked = true;
  else
    btn2Clicked = true;

  // reset both to false after a second
  setTimeout(() => {
    btn1Clicked = false;
    btn2Clicked = false;
  }, 1000)
  
  // If both have been tracked as true in the past 1 sec
  if(btn1Clicked && btn2Clicked)
    console.log("--success--");
}


////

function functionRunner(functionToRun) {
    console.log(typeof functionToRun);
    // Here we are calling the function that is provided as an argument when calling functionRunner
    functionToRun();
  }
  
  functionRunner(function() {
    console.log('hello');
  });
  
  // We dont see anything, why??
  functionRunner(Math.random);
  
  // Lets rewrite functionRunner to log out the return of a function 
  function functionRunnerImproved(functionToRun) {
    console.log(typeof functionToRun);
    // Here we are calling the function that is provided as an argument when calling functionRunner
    const capturedReturnValue = functionToRun();
    console.log(capturedReturnValue);
  }
  
  functionRunnerImproved(Math.random);