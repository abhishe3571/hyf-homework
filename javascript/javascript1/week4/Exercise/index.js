// Problem 1: Fibonacci Sequence

// Given a specific number in the fibonacci sequence return the fibonachi number.

function fib(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return n;
}
console.log(fib(5));

//

function fib1(n) {
  if (n < 2) {
    return n;
  } else {
    return fib1(n - 1) + fib(n - 2);
  }
}

console.log(fib1(10));

///------------------------------------------------------------------------------------

function fizzBuzz(a, b) {
  const array = [];

  for (let number = 1; number <= 100; number++) {
    if (number % a === 0 && number % b === 0) {
      array.push("fizzbuzz");
    } else if (number % a === 0) {
      array.push("fizz");
    } else if (number % b === 0) {
      array.push("buzz");
    } else {
      array.push(number);
    }
  }
  return array;
}

console.log(fizzBuzz(3, 5));

////----------------------------------------------------------------------------------

// Problem 3: Build a sentiment analyzer

/* sentiment analyzer is some functionality that figures out how positive/negative a 
   sentence is.

   Fx the sentence `I am mega super awesome happy" Should have a high score The sentence 
   "I hate doing boring stuff" should have a low score.

   Create a function that takes a string as a parameter. calling the function will return 
   an object with score, positiveWords and negativeWords. You decide how the score should 
   be implemented and what words are negative and positive.

   Here is an example of using the function:

   const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

   console.log(sentimentScoreObject); 

{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/

function getSentimentScore(sentence) {
  const positiveWords = [
    "happy",
    "awesome",
    "super",
    "enjoy",
    "happiness",
    "joy",
  ];
  const negativeWords = ["hate", "boring", "sad", "angry", "fail"];

  const result = {
    sentence,
    score: 0,
    positiveWords: [],
    negativeWords: [],
  };

  const wordsInSentence = sentence.toLowerCase().match(/\w+/g) || [];

  for (const word of wordsInSentence) {
    if (positiveWords.includes(word)) {
      result.score += 1;
      result.positiveWords.push(word);
    } else if (negativeWords.includes(word)) {
      result.score -= 1;
      result.negativeWords.push(word);
    }
  }

  return result;
}

console.log(getSentimentScore("I am feeling happy and sad at a same time."));

/// Problem 4: Credit card number formatter

/* This is a very real world example of a problem i got at my previous work. I was tasked 
   to implement one of the smart credit card input fields, where the credit card numbers 
   are seperated with a space. Fx inputting 123456789 would show 1234 5678 9.

   Create a function that takes a number as parameter. The function should return the following object:

   const formattedCreditCardObject = formatCreditCardNumber(123456789);
   console.log(formattedCreditCardObject);

    {
        original: 123456789,
        formatted: "1234 5678 9",
    }
*/

function formatCreditCardNumber(number) {
  return {
    original: number,
    formatted: format(number),
  };

  function format(number) {
    const value = number.replace(/\s+/g, "");
    const regexpFourDigits = /\d{4}/g;

    const result = value.match(regexpFourDigits);
    return result;
  }
}

console.log(formatCreditCardNumber("123456789"));

///////

function getCharacterFrequenciesV2(word) {
  const result = {
    length: word.length,
    characters: [],
  };
  const charCountDict = {};
  for (const char of word) {
    if (!charCountDict[char]) {
      console.log("creating new entry for", char);
      charCountDict[char] = 1;
    } else {
      console.log("updating existing entry for", char);
      charCountDict[char] += 1;
    }
    console.log(JSON.stringify(charCountDict));
  }
  for (const char of Array.from(Object.keys(charCountDict)).sort()) {
    result.characters.push({
      character: char,
      count: charCountDict[char],
    });
  }
  return result;
}
console.log(JSON.stringify(getCharacterFrequenciesV2("happy")));

//--------------------------------------------------------------------------------------

// Problem 4: Palindromic substring

// Write a function that finds the longest palindromic substring of a given string.

function findLongestPalindromicString(text) {
  let longestString = "";
  for (let i = 1; i <= text.length - 2; ++i) {
    let palendromicString = "";

    for (let j = 1; j <= text.length / 2; ++j) {
      const startIndex = i - j;
      const endIndex = i + j;
      console.log(`i=${i}, startIndex=${startIndex}, endIndex=${endIndex}`);
      if (
        startIndex < 0 ||
        endIndex > text.length - 1 ||
        text[startIndex].toLowerCase() !== text[endIndex].toLowerCase()
      ) {
        break;
      }
      palendromicString = text.substring(startIndex, endIndex + 1);
      console.log(`found a palendromic string: ${palendromicString}`);
    }
    if (palendromicString.length > longestString.length) {
      longestString = palendromicString;
      console.log(`Longest palendromic string is: ${longestString}`);
    }
  }
  return longestString;
}
console.log(findLongestPalindromicString("hhhelemojkjomcdc"));
//console.log(findLongestPalindromicString(`Palindromes often consist of a sentence or phrase, e.g., "Mr. Owl ate my metal worm", "Do geese see God?", "Was it a car or a cat I saw?", "Murder for a jar of red rum" or "Go hang a salami, I'm a lasagna hog". Punctuation, capitalization, and spaces are usually ignored. Some, such as "Rats live on no evil star", "Live on time, emit no evil", and "Step on no pets", include the spaces. `));

// Problem 5: Credit card info

/*  Similar to the format credit card number, now we need to identify the credit card
    type.

    console.log(getCardInfo(4781321334789876)); // 'visa'
    How can we find out what rules there are for credit cards? Programmers best friend 
    is always available :)
*/


function getCardInfo(number) {
    const regExp = {
        visa: /^(4[0-9]{12}([0-9]{3}))$/g,
        masterCard: /^(5[1-5][0-9]{14})$/g,
        americanExpress: /^(3[47][0-9]{13})$/g,
        unionPayCard: /^(62[0-9]{14,17})$/g,
    };

    for (const key in regExp) {
        if (regExp[key].test(number)) {
            return key;
        }
    }

    return `Please enter a valid card number`;

}

console.log(getCardInfo('4723423323341331'));

console.log(getCardInfo('6223423323341331'));




// Problem 6: Tic Tac Toe

/* Draw a tic tac toe game.

   Write a function called getRenderedGame(position) that takes position as parameter.
   position is a two dimensional array that shows the position of a game.

   Here is an example:

   With the following two dimensional array

   const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
  ];
  const renderedGame = getRenderedGame(position);
  console.log(renderedGame);

  /*
    *******
    *x*o* *
    * *o* *
    * *o*x*
    *******
  
  Create a new function called getGameinfo(position). Calling the function should return 
  an object with winner key, loser key, hasEnded and nextPlayer.

  const position = [
  ['x', 'o', ' '],
  [' ', 'o', ' '],
  [' ', 'o', 'x']
];

  const gameInfo = getGameinfo(position);
  console.log(gameInfo);


  {
    winner: 'o',
    loser: 'x',
    hasEnded: true
  }

   const position = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', 'o', 'x']
  ];
  
  const gameInfo = getGameinfo(position);
  console.log(gameInfo);
  
  /*
  {
    winner: undefined,
    loser: undefined,
    hasEnded: false
  }

*/  
function getRenderedGame(positionArray) {
    let output = "/*\n*******\n";
    for (const row of positionArray) {
      output += `*${row.join("*")}*\n`;
    }
    output += "*******\n*/";

    return output;
  }

  const DEFAULT_GAME_INFO = {
    winner: undefined,
    loser: undefined,
    hasEnded: false,
  };

  function checkForWinner(valuesList) {
    const result = { ...DEFAULT_GAME_INFO };

    const valuesSet = new Set(valuesList);

    if (valuesSet.size === 1) {
      // console.log(valuesList, valuesSet);
      let winner = valuesSet.values().next().value;
      winner = winner.trim().toLowerCase();

      const hasWinner = winner.length > 0;
  
      if (hasWinner) {
        const loser = winner === "x" ? "o" : "x";
  
        result.winner = winner;
        result.loser = loser;
        result.hasEnded = true;
      }
    }
  
    return result;
  }

  function getGameinfo(positionArray) {
    let hasAtLeastOneEmptySpot = false;
    // console.log("checking for row values");

    for (const rowValues of positionArray) {
      if (!hasAtLeastOneEmptySpot) {
        for (const value of rowValues) {
          if (value.trim().length === 0) {
            hasAtLeastOneEmptySpot = true;
          }
        }
      }
  
      // console.log("rowValues", rowValues);
      const result = checkForWinner(rowValues);
      if (result.hasEnded) {
        return result;
      }
    }
    const columnsCount = positionArray[0].length;

    // console.log("checking for column values");
    for (let colIndex = 0; colIndex < columnsCount; ++colIndex) {
      const columnValues = [];
      for (let rowIndex = 0; rowIndex < positionArray.length; ++rowIndex) {
        columnValues.push(positionArray[rowIndex][colIndex]);
      }
      // console.log("columnValues", columnValues);
      const result = checkForWinner(columnValues);
      if (result.hasEnded) {
        return result;
      }
    }
    const diagonalValues1 = [];
    const diagonalValues2 = [];
    for (let rowIndex = 0; rowIndex < positionArray.length; ++rowIndex) {
      diagonalValues1.push(positionArray[rowIndex][rowIndex]);
      diagonalValues2.push(
        positionArray[positionArray.length - 1 - rowIndex][rowIndex]
      );
    }

    for (const values of [diagonalValues1, diagonalValues2]) {
      const result = checkForWinner(values);
      if (result.hasEnded) {
        return result;
      }
    }
 
    return { ...DEFAULT_GAME_INFO, hasEnded: !hasAtLeastOneEmptySpot };
  }

  const position = [
    ["x", "o", " "],
    [" ", "o", " "],
    [" ", "o", "x"],
  ];
 
  const renderedGame = getRenderedGame(position);
  console.log(renderedGame);

  /*
   *******
   *x*o* *
   * *o* *
   * *o*x*
   *******
   */
  
  const gameInfo = getGameinfo(position);
  console.log(gameInfo);
 
  console.log(
    getGameinfo([
      ["x", "o", " "],
      [" ", " ", " "],
      [" ", "o", "x"],
    ])
  );

  console.log(
    getGameinfo([
      ["x", "o", " "],
      [" ", "x", " "],
      [" ", "o", "x"],
    ])
  );
  
  console.log(
    getGameinfo([
      ["x", "o", "o"],
      ["o", "x", "x"],
      ["x", "o", "o"],
    ])
  );
  
  console.log(
    getGameinfo([
      ["x", "o", "o", "x"],
      ["o", " ", "x", "o"],
      ["x", "o", "o", "x"],
      ["x", "o", "o", "x"],
    ])
  );



  ///////////////////////////////////////////////////////////
  let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
  console.log(vegetables)
  // ["Cabbage", "Turnip", "Radish", "Carrot"]
  
  let pos = 1
  let n = 3
  
  let removedItems = vegetables.splice(pos, n)
  // this is how to remove items, n defines the number of items to be removed,
  // starting at the index position specified by pos and progressing toward the end of array.
  
  console.log(vegetables)
  // ["Cabbage", "Carrot"] (the original array is changed)
  
  console.log(removedItems)
  // ["Turnip", "Radish"]