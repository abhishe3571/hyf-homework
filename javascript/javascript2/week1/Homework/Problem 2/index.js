// Problem 2: Find the shortest word

/* Find the individual number and the total number of danish letters in a string.
   
   const danishString = ['Jeg har en blå bil'];
   notThisFunctionName(danishString); // returns {total: 1, å: 1}

   const danishString2 = ['Blå grød med rød bær'];
   notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
*/


function findDanishLettersCount(sentence) {
    const danishLetters = ["æ", "ø", "å"];
    const result = { total: 0 };
  
    for (let character of sentence) {
      character = character.toLocaleLowerCase(); // converting to lowercase because we match again that
  
      if (danishLetters.includes(character)) {
        // we have a match
        result.total += 1;
  
        if (!result[character]) {
          // there is no entry in result for this charater
          result[character] = 1;
        } else {
          // there is an entry, lets increase the count
          result[character] += 1;
        }
      }
    }
  
    return result;
  }
  
  const danishString = "Jeg har en blå bil og en Æg. ør Æe ØÆøøø Æøøø ÆÅÅÅÅ";
  console.log(findDanishLettersCount(danishString)); // returns {total: 1, å: 1}
  
  const danishString2 = "Blå grød med rød bær";
  console.log(findDanishLettersCount(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}