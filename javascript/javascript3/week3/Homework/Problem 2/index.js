// Getting into promises
// Lets use the github api to see what repositories different users have. You can use this url to get
// repositories for a specific github username, in this case the username benna100:
// https://api.github.com/search/repositories?q=user:benna100. Select 3 classmates github username
// that you want to show repositories for.

// Fetch all the 3 classmates repositories at the same time using Promise.all. Remember the all at once
// exercise here?

// When you have the data for the different repositories, render the fullname of the repo, url of the
// repo, and the owner of the repo. See github-repos as an example of how the renderered repos should
// look. You are more than welcome to style it a bit nicer!

//https://api.github.com/search/repositories?q=user:pankaj28843

function getData(url) {
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function reject() {
    console.log("some error occured");
  }
  

/// user1  
const user1GithubUrl = "https://api.github.com/search/repositories?q=user:pankaj28843";

function getUser1Data() {
  getData(user1GithubUrl);
}

const user1 = new Promise(getUser1Data, reject);

////User2


const user2GithubUrl = "https://api.github.com/search/repositories?q=user:brij1728";

function getUser2Data() {
  getData(user2GithubUrl);
}


const user2 = new Promise(getUser2Data, reject);

///// User3

const user3GithubUrl = "https://api.github.com/search/repositories?q=user:abhishe3571";

function getUser3Data() {
  getData(user3GithubUrl);
}

const user3 = new Promise(getUser3Data, reject);




/*
    Using Promise All method to get all the data when every promise is resolved
*/

Promise.all([user1, user2, user3]).then((result) => {
  console.log("All users data at the same time", result)
});

