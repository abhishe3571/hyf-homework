/* Using promises

fetch yes or no from this api: https://yesno.wtf/api. log out the answer
Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message 
*/

const fetchPromise = fetch("https://yesno.wtf/api");
fetchPromise.then((response) =>
  response.json().then((json) => console.log(json))
);
