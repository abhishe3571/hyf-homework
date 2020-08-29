// Problem 3: Spirit animal name generator

/* Let's create a page where a user writes his name in an input element. The user then 
clicks a button. The user will now receive a spirit animal name, fx Benjamin - The 
fullmoon wolf.

1: Markup time!
    Create an input element, a button and a tag to display the spirit animal into.

2: Setting up the events
    When the user clicks the button, get the name the user wrote in the input field.

3: Spirit animal part
    Now we can get the users name, next step is to add the spirit animal string and 
    display that the users name, a dash and then the spirit animal. Fx Name: Peter: 
    Peter - The crying butterfly For creating the spirit animal create an array with 
    10 string representing spirit animals. Now get a random item in the array that 
    will represent the spirit animal.
4: New spirit animal
    Now a user tells us that he wants a new spirit animal. No problem we say. Let's create 
    functionality where a user can press a button and then get a new spirit animal.  

    
5: No input
    What if the user clicks the generate new spirit animal and there is no text in the input?

    

*/

const SPIRIT_ANIMALS = [
  "Midnight Hawk",
  "Pink Unicorn",
  "Falcon Bird",
  "Beaver",
  "Wolf",
  "Woodpecker",
  "Raven",
  "Owl",
  "Snow Goose",
  "Otter",
];


function getSpiritAnimalName(userName) {
    userName = userName.trim();
    if (!userName) {
      return `Please type your name`;
    }
  
    const spiritAnimal =
      SPIRIT_ANIMALS[Math.floor(Math.random() * SPIRIT_ANIMALS.length)];
  
    return `Your Spirit Animal Name is: "${userName} - ${spiritAnimal}"`;
  }
  
  const nameForm = document.querySelector("form#myForm");
  const outputDiv = document.querySelector("div#output");
  const nameInput = nameForm.querySelector('input[name="userName"]');
  
  console.log(nameInput);
  
  function refreshOutput() {
    const formData = new FormData(nameForm);
    const userName = formData.get("userName");
  
    // const userName = nameForm
    //   .querySelector('input[name="userName"]')
    //   .value;
  
    const spiritAnimalName = getSpiritAnimalName(userName);
    outputDiv.innerHTML = `<h3>${spiritAnimalName}</h3>`;
  }
  
  // ============== FORM SUBMIT HANDLER
  const onFormSubmit = (e) => {
    e.preventDefault();
    refreshOutput();
  };
  
  const onHover = () => refreshOutput();
  
  const onTextChange = () => refreshOutput();
  
  // ============== EVENT TYPE CHANGE HANDLER
  const onEventTypeChange = () => {
    const selectedEvent = eventSelector.value;
  
    if (selectedEvent === "onSubmit") {
      nameForm.addEventListener("submit", onFormSubmit);
      nameInput.removeEventListener("mouseover", onHover);
      nameInput.removeEventListener("keyup", onTextChange);
    } else if (selectedEvent === "onHover") {
      nameInput.addEventListener("mouseover", onHover);
      nameForm.removeEventListener("submit", onFormSubmit);
      nameInput.removeEventListener("keyup", onTextChange);
    } else if (selectedEvent === "onTextChange") {
      nameInput.addEventListener("keyup", onTextChange);
      nameForm.removeEventListener("submit", onFormSubmit);
      nameInput.removeEventListener("mouseover", onHover);
    } else {
      nameForm.removeEventListener("submit", onFormSubmit);
      nameInput.removeEventListener("mouseover", onHover);
      nameInput.removeEventListener("keyup", onTextChange);
    }
  };
  
  const eventSelector = document.querySelector("select#eventSelector");
  eventSelector.addEventListener("change", onEventTypeChange);
  
  // for registering events listeners on page load
  onEventTypeChange();