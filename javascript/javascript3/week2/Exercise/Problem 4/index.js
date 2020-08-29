// Create a function that returns a promise, that i can use like this:

// // getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// // Sometimes it should resolve and sometimes it should reject. 
// // Look into Math.random
// getLoggedInUsers()
//     .then(users => {
//         console.log(users); // ['benna', 'magdy', 'carolina']
//     }).catch(error => {
//         console.log(error);
//     });
// The above example show how to consume the promise using promises. Now try consume the 
// getLoggedInUsers using async/await