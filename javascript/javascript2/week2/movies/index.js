//console.log("Javascript was loaded succesfully!");
/*
Copy the movies array in the movies file. Use this array to do the following tasks:

Create an array of movies containing the movies with a short title (you define what short means)
Create an array of movie titles with long movie titles 

Count the number of movies made between 1980-1989 (including both the years)

Create a new array that has an extra key called tag. The tag is based on the rating: 
Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

Using chaining, first filter the movies array to only contain the movies rated higher 
than 6. Now map the movies array to only the rating of the movies.

Count the total number of movies containing any of following keywords: Surfer, Alien or 
Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
Can you make sure the search is case insensitive?

Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The 
Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with 
duplicated words in the title: "The three men and the pistol", "Chase three - The final 
chase"

Calculate the average rating of all the movies using reduce. Optional

Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
*/

console.log(movies);
// Movies with Long title
const moviesWithLongTitles = movies
  .filter((m) => m.title.length >= 60)
  .map((m) => m.title);
console.log(`moviesWithLongTitles`, moviesWithLongTitles);

// Movies with Short title
const moviesWithShortTitles = movies
  .filter((m) => m.title.length <= 60)
  .map((m) => m.title);

console.log(`moviesWithShortTitles`, moviesWithShortTitles);

// Movies in the year 1980-1989
const moviesReleaseYearBtw = movies
  .filter((m) => m.year >= 1980 && m.year <= 1989)
  .map((m) => m.title);

console.log(moviesReleaseYearBtw);

const averageRuntimeForMoviesFrom2000s = movies
  .filter((m) => m.year >= 2000 && m.year <= 2009)
  .reduce(
    (sum, m, _index, filteredArray) =>
      sum + m.running_times / filteredArray.length,
    0
  );
console.log(
  `averageRuntimeForMoviesFrom2000s ${
    averageRuntimeForMoviesFrom2000s / 60
  } minutes`
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const moviesWithGreatRatings = movies
  .filter((m) => m.rating >= 8.8 && m.votes >= 10000)
  .sort((m1, m2) => m1.year - m2.year)
  .map((m) => m.title);

console.log(`moviesWithGreatRatings`, moviesWithGreatRatings);

const moviesWithLowestRating = movies
  .sort((m1, m2) => m1.rating - m2.rating)
  .slice(0, 100)
  .map((m) => `${m.title} - ${m.rating} star - ${m.votes} votes`);

console.log(`moviesWithLowestRating: `, moviesWithLowestRating.join("\n"));

const moviesReleaseYear = movies
  .filter((m) => m.year >= 2015)
  .map((m) => m.title);
console.log(`moviesReleaseYear`, moviesReleaseYear);


///Duplicate Word

function splitIntoWords(str, ignoreCase = false) {
    if (ignoreCase) {
      str = str.toLocaleLowerCase();
    }
    return str.split(/[^a-z0-9]+/gi);
  }
  
  function findDuplicateWords(title, ignoreCase = false) {
    const wordsArray = splitIntoWords(title, ignoreCase);
    const countsDict = {};
  
    const duplicateWords = [];
  
    for (const word of wordsArray) {
      if (!countsDict[word]) {
        countsDict[word] = 1;
      } else {
        countsDict[word] += 1;
        duplicateWords.push(word);
      }
    }
  
    if (duplicateWords.length) {
      return duplicateWords;
    }
  }
  
  console.log(findDuplicateWords('Star Wars: The Clone Wars'));
  // [ 'Wars' ]
  
  console.log(findDuplicateWords("Chase three - The final chase", true));
  // undefined
  
  console.log(findDuplicateWords('Hello heLLo', true));
  // [ 'hello' ]
  
  console.log(findDuplicateWords('I am so: unique! roger that!!!'));
  
