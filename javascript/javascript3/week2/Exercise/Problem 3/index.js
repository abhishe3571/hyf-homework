/* Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' 
after 4 seconds.
Now make the promise fail by rejecting it with an error message instead of resolving it, and 
log the error message to the console.
*/

const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(4000).then(() => console.log('Hello!')); 

///

Promise.reject(new Error('Promise is not resolved'))
  .catch(err => console.log(err.message));
