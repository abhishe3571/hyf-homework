/* console.log(JSON.parse(`null`));
console.log(JSON.parse(`{}`));
console.log(JSON.parse(`[]`));
console.log(JSON.parse(`true`));
console.log(JSON.parse(`false`));
console.log(JSON.parse(`123`));
console.log(JSON.parse(`123.45`));
console.log(JSON.parse(`"Hello world"`));
console.log(JSON.parse(`""`));
console.log(JSON.parse(`"My Name\\nisPankaj"`));
console.log(JSON.parse(`{"name": "Benjamin", "age": 23}`));
console.log(
  JSON.parse(`[
    {"name": "Benjamin", "age": 23},
    {"name": "Benjamin", "age": 23}
]`)
);
console.log(
  JSON.parse(`[
    1,2,3,4
]`)
);

const numbers = [1, 2, 3, 4];
console.log(`numbers Array`, numbers);

console.log(JSON.parse(`{"name": "Benjamin", "age": 23}`));

const person = {
  name: "Murphy Alex",
  "some key": 123,
  age: 23,
  location: "Austin, Texas",
  hobbies: ["Music", "Badminton"],
  heightInFeet: 5.23,
  isEmployed: false,
  taxesPaid: undefined,
};

console.log(JSON.stringify(person));
console.log(JSON.stringify(person, null, 2));

const jsonString = JSON.stringify(person);
const objectFromJson = JSON.parse(jsonString);
console.log(person, objectFromJson);

console.log(JSON.stringify([undefined]));

///

const user = {
  name: "John",
  email: "john@awesome.com",
  plan: "Pro",
};

const userStr = JSON.stringify(user);

JSON.parse(userStr, (key, value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
});
console.log(userStr);
console.log(userStr.value);
*/
/////

 function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function refreshOutput() {
  const url = "https://yesno.wtf/api/";

  fetchJsonData(url)
    .then((data) => {
      console.log("response", data);
      renderOutput(data);
    })
    .catch((error) => {
      console.log("Error occured", error);
      showError();
    });
}

function renderOutput(data) {
  const outputDiv = document.querySelector("#output");

  outputDiv.innerHTML = `
          <h1>${data.answer.toLocaleUpperCase()}</h1>
          <div><img src="${data.image}"/></div>
      `;
}

function showError() {
  const outputDiv = document.querySelector("#output");
  outputDiv.innerHTML = `<h2>Some error occured while fetching data</h2>`;
}

const button = document.querySelector("button");
button.addEventListener("click", refreshOutput); 


/* function fetchJsonData(url) {
    return fetch(url).then((response) => response.json());
  }
  
  function fetchAndShowAllLaunches() {
    const url = "https://api.spacexdata.com/v3/launches";
  
    fetchJsonData(url)
      .then((allLaunches) => {
        console.log("response", allLaunches);
  
        const filteredLaunches = filterLaunches(allLaunches, {
          // launch_success: true,
        });
  
        renderOutput(filteredLaunches);
      })
      .catch((error) => {
        console.log("Error occured", error);
        showError();
      });
  }
  
  function renderOutput(launches) {
    const outputDiv = document.querySelector("#output");
  
    outputDiv.innerHTML = ``;
  
    for (const launch of launches) {
      const launchDiv = document.createElement("div");
      outputDiv.appendChild(launchDiv);
      launchDiv.innerHTML = `
          <h1>Mission name: <a href="${launch.links.wikipedia}" target="_blank">${
        launch.mission_name
      }</a></h1>
          <ul>
          <li>Launch date/time: ${new Date(launch.launch_date_utc)}</li>
          <li>Was successful launch: ${launch.launch_success}</li>
          <li>Rocket Name: ${launch.rocket.rocket_name}</li>
          <li>Rocket Type: ${launch.rocket.rocket_type}</li>
          </ul>
      `;
  
      if (launch.links.mission_patch_small) {
          launchDiv.innerHTML += `<div><img src="${launch.links.mission_patch_small}"/></div>`;
      }
    }
  }
  
  function filterLaunches(launches, filterObject) {
    return launches.filter((launch) => {
      if (filterObject.launch_success !== undefined) {
        return launch.launch_success === filterObject.launch_success;
      }
  
      return true;
    });
  }
  
  function showError() {
    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `<h2>Some error occured while fetching data</h2>`;
  }
  
  const button = document.querySelector("button");
  button.addEventListener("click", fetchAndShowAllLaunches); */

  