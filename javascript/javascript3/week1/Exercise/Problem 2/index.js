/* Astronauts in space
Use this api to fetch how many astronauts are currently in spaces.

Add the following text to the DOM, using the data about astronauts:

There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5
An example with 2 astronauts could be:

There are 2 astronauts in space, they are:
Benjamin Hughes
Jørgen Pedersen 
*/

/* const output = document.getElementById("output");

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const people = response.people;

    const header = document.createElement("h1");
    header.innerText = `There are ${people.length} astronauts in space, they are:`;
    output.appendChild(header);

    for (let i = 0; i <= people.length; i++) {
      const person = people[i];
      console.log(person);

      const p = document.createElement("p");
      p.innerText = person.name;
      output.appendChild(p);
    }
  }); */
////

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function refreshOutput() {
  const url = "http://api.open-notify.org/astros.json";

  fetchJsonData(url).then((data) => {
    console.log("response", data);
    renderOutput(data);
  });
}
