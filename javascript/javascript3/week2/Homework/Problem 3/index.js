/* Rewrite time
Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. The getCurrentPosition 
function is probably going to throw an error, but that is fine. As long as you can use it as a promise.

Example of usage

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    }); 
*/