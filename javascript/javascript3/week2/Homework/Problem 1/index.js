/* Movies exercise
This exercise is repetition of array functions. you dont have to use chaining or anything fancy. Just fetch the movies and use the correct array function to get the following movies:

Fetch movies from this api:

Create an array of bad movies
Creat an array of bad movies since year 2000 */

moviesUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(moviesUrl)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);

    const moviesList = data;
    const badMoviesList = moviesList.filter(
      (m) => m.rating < 4 && m.year > 2000 && m.year < 2009
    );
    console.log(badMoviesList);
  })
  .catch((error) => console.log(error));
