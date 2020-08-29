/* Get the astronauts and the movies at the same time. Log out the movies and the battery status 
when both promises has been resolved.

 */

 /* 
​
Getting Astronauts Data
​
*/
function getData(url) {
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function reject() {
    console.log("some error occured");
  }
  

  
const astronautsUrl = "http://api.open-notify.org/astros.json";

function getAstronautsData() {
  getData(astronautsUrl);
}

const astronauts = new Promise(getAstronautsData, reject);

/* 
Getting data of the movies
*/

const moviesUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

function getMoviesData() {
  getData(moviesUrl);
}

const movies = new Promise(getMoviesData, reject);

/* 
 Getting Battery Satatus
*/

let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
  printBatteryStatus(batteryObject);
}
function printBatteryStatus(batteryObject) {
  console.log("IsCharging", batteryObject.charging);
  console.log("Percentage", batteryObject.level);
  console.log("charging Time", batteryObject.chargingTime);
  console.log("DisCharging Time", batteryObject.dischargingTime);
}

const batteryStatus = new Promise(printBatteryStatus, reject);

/*
    Using Promise All method to get all the data when every promise is resolved
*/

Promise.all([astronauts, movies, batteryStatus]).then((result) => {
  console.log("Both data at the same time", result)
});
