/* Fetching and waiting
Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await
The 3 steps:

Wait 3 seconds
After 3 seconds fetch some data from any api you like
Log out the data from the api
Which way do you prefer, the promise way or the async/await way? 
*/


moviesUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Wait 3 seconds'))

fetch(moviesUrl)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })  
  
  
///

async function getAstronauts() {
    try {
        const astronautsResponse = await fetch(
            "http://api.open-notify.org/astros.json"
        );
        const astronauts = await astronautsResponse.json();
        return astronauts;
    } catch(err) {
        throw "Fetchin the astronauts went wrong";
    }
}

// const astronauts = getAstronauts();