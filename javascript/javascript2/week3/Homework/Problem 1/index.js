/*  
  // Problem 1:  Warmup
  
Part 1: Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
*/
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);
/*
Part2: Create a function that takes 2 parameters: delay and stringToLog. Calling this 
    function should log out the stringToLog after delay seconds. Call the function 
    you have created with some different arguments. 
*/
function delaySeconds(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

delaySeconds(5, "This string logged after 5 seconds");
delaySeconds(7, "This string logged after 7 seconds");
delaySeconds(10, "This string logged after 10 seconds");

/*    
Part3: Create a button in html. When clicking this button, use the function you created 
    in the previous task to log out the text: Called after 5 seconds 5 seconds after the 
    button is clicked.

*/

const myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
  delaySeconds(5, "This button is clicked after 5 seconds");
});

/*
Part4: Create two functions and assign them to two different variables. One function logs
out Earth, the other function logs out Saturn. Now create a new third function that has 
one parameter: planetLogFunction. The only thing the third function should do is call the
provided parameter function. Try call the third function once with the Earth function and 
once with the Saturn function. 
  
*/

const earthLogger = (function () {
  console.log("Earth");
});
earthLogger();

const saturnLogger = (function () {
  console.log("Saturn");
});

function planetLogger(planetLogFunction) {
    planetLogFunction()

}

planetLogger(earthLogger);
planetLogger(saturnLogger);

/* 
Part5: Create a button with the text called "Log location". When this button is clicked 
the location (latitude, longitude) of the user should be logged out using this browser 
api
*/
function findLocation() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    showMap(latitude, longitude);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function showMap(latitude, longitude) {
  const map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 16,
    }),
  });
}

document.querySelector("#location").addEventListener("click", findLocation);

/* 
Part6: Optional Now show that location on a map using fx the Google maps api
*/

/* 
Part7: Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback 
function. Try and call this function with different delays and different callback functions
*/

function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
        console.log(`Logged after ${delay} seconds`)
    }, delay * 1000)
}
function callbackFunctions() {
    console.log('hello, how are you?')
}

runAfterDelay(12, callbackFunctions);
/* 
Part8: Check if we have double clicked on the page. A double click is defined by two 
clicks within 0.5 seconds. If a double click has been detected, log out the text: "double 
click!"
*/


/* 

Part9: Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - 
boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to 
true it should call the logFunnyJoke function that should log out a funny joke. And vice 
versa.
*/
