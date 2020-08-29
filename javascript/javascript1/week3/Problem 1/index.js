// Problem 1: Item array removal

/* Remove the item in names that is equal to nameToRemove
   Copy the code below to your homework

*/

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
    if ( names[i] === nameToRemove) {
        names.splice(i, 1);

    }
}

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

////


function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let myName = makeUser('abhishek', 23);
  let user = makeUser("John", 30);
  console.log(user.name); // John
  console.log(myName.name);

  /////////

  let user1 = { name: "John", age: 30 };

console.log( "age" in user1 ); // true, user.age exists
console.log( "blabla" in user1 ); // false, user.blabla doesn't exist

/////////////////////////////////////////////////////////////////


const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"



