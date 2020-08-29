// Problem 2: When will we be there??

/* Write a function where you speficy your speed in km/h and how far you have 
   to go in km. The function has to return the time it will take to arrive at 
   your destination. The time should be formatted like this: 3 hours and 34 minutes.

*/

const travelInformation = {
  speed: 53,
  destinationDistance: 432,
};

function durationOfJourney() {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.ceil((time % 1) * 60);

  return `${hours} hours ${minutes} minutes`;
}

const travelTime = durationOfJourney(travelInformation);
console.log(travelTime);
