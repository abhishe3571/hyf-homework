// Problem 1: Find the shortest word

/* Write a function that finds the shortest word of an array of words

   const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
   notThisFunctionName(danishWords); // returns 'ø'
*/   


const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
    shortestWords();
})


function shortestWords(array) {
    let shortestWord = '';
    let shortestWordLength = Infinity;
    for (const words of array) {
        if ( words.length < shortestWordLength ) {
            shortestWord = words;
            shortestWordLength = words.length; 
        
        }
    }

    return shortestWord;
}
console.log(shortestWords(danishWords));