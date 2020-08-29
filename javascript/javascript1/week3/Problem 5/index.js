// Problem 5: CactusIO-interactive (Smart phone usage app) optional

/* After a long day you come home to relax. The first thing you do is find your phone 
   and start watching some youtube. Then check facebook, and then reading some news.
   Suddently a hour has passed. What happened to all that time you think to yourself.
   Maybe we can create some program to help with this problem! What if we could help 
   users manage their smart phone usage?

   Its going to work like this: A user can add smartphone activities. Then he can see
   a status on how his smartphone usage is going.
*/

// Part 1: Adding an activity

/* Lets create the first part of the functionality that is adding activities.
   

   Create a variable called activities that stores all activities of the day. 
   What type of variable would you think would make sense? Create a function 
   called addActivity. It should have three parameters: date, activity and 
   duration. The date should be a string, the activity a string and the duration 
   a number. To save the activity push an object that contains the date, the 
   activity and the duration to the activities variable.
*/


const activities = [];

function addActivity(date, addActivity, duration) {
    activities.push({
        date,
        activity,
        duration,
    });

}


// Part 2: Show my status
/*
Create a function called showStatus. This function should use 
the activities variable and return a string saying the following: 
"You have added 3 activities. They amount to 78 min. of usage"
*/


let totalDuration = 0;
function showStatus(activities) {
  if (activities.length !== 0 && activities.length < 7) {
    for (i = 0; i < activities.length; i++) {
      totalDuration += activities[i].duration;
    }
​
    return `\"You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage\"`;
  } else if (activities.length >= 7) {
    console.log(
      `\"You have reached your limit, no more smartphoning for you!\"`
    );
  } else {
    console.log(`\"Add some activities before calling showStatus\"`);
  }
}
​
console.log(showStatus(activities));

