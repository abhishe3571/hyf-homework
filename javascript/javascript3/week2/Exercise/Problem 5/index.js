/* Using chaining

Fetch the astronauts
After the astronauts has been fetched, fetch movies using this api
Log out the movies 
*/
const moviesrUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

const astronautsUrl = "http://api.open-notify.org/astros.json";

/* fetch(url)
  .then((data) => {
    renderData(data);
    return fetch(otherUrl);
  })
  .then((otherData) => {
    renderOtherData(otherData);
  })
  .catch((err) => {
    console.log("error msg");
  }); */

/* 
​
Getting Astronauts Data
​
*/

fetch(astronautsUrl)
  .then((response) => response.json())
  .then((astronauts) => {
    console.log(astronauts);
  });
fetch(moviesrUrl)
  .then((moviesResponse) => moviesResponse.json())
  .then((movies) => {
    console.log(movies);
  })
  .catch((error) => console.log(error));

/* function getAstronautsOld() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((astronauts) => {
        console.log(astronauts);
      });
    console.log(astronauts);
  } */
