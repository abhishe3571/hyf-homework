// Problem 1:

/* You will be building a voice assistant robot! Is that even possible in javascript,
   YES! EVERYTHING is possible in javascript muscle (nearly)

   Create a function called getReply(command). The function should return a response that 
   corresponds to the command!

   These are the commands you should be able to give the voice assistant:

   Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to
   meet you Benjamin". What if someone writes this twice?
   What is my name - should respond with the name of the person. What if the name has not 
   yet been mentioned?
   Add fishing to my todo - Should respond with "fishing added to your todo". Should add 
   fishing to a list of todos
   Add singing in the shower to my todo - Should add singing in the shower to a list of 
   todos
   Remove fishing from my todo - Should respond with "Removed fishing from your todo"
   What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and 
   singing in the shower
   What day is it today? - Should respond with the date in a human readable format. E.g. 
   if today is 30/8/2019 then it should respond with 30. of August 2019
   Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 
   should respond with 48
   Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4
   minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
   Add one or more command to your voice assistant

*/

function writeToChatRoom(handle, text) {
  console.log(`${handle}: ${text}`);
  const outputDiv = document.querySelector("#output");
  const div = document.createElement("div");
  outputDiv.appendChild(div);

  div.outerHTML = `<div class="row top-xs">
      <div class="col-md-1">
      <p><b>${handle}:</b></p>
      </div>
      <div class="col-md-9">
      <p>${text}</p>
      </div>
    </div>`;

  outputDiv.scrollTop = outputDiv.scrollHeight;
}

const inputForm = document.querySelector("#inputForm");
const userInputElement = inputForm.querySelector('input[name="userInput"]');
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inputForm);
  // const userInput = formData.userInput;

  const userInput = userInputElement.value.trim();

  if (userInput) {
    getReply(userInput);
  }

  userInputElement.value = "";
});

// writeToChatRoom('Bot', 'Hey! I am a bot');
const regexDict = {
  add = () => /(?:\s*add\s+)(?<itemName>[\w\s]+)(?:\s+to\s+my\s+todo\s*)/gi,
  remove = () => /(?:\s*remove\s+)(?<itemName>[\w\s]+)(?:\s+from\s+my\s+todo\s*)/gi,
  math = () => /(?:\.*\s*)(?<variable1>-?\d+(\.\d+)?)\s*(?<operator>[-+*/]{1})\s*(?<variable2>-?\d+(\.\d+)?)/gi,
  time = () => /(?<duration>\d+(\.\d+)?)/,
};

function parseCommand(commandText) {
  const commandDetails = { commandType: "unknown", inputData: undefined };

  const cleanedCommandText = commandText
    .replace(/\s+/, " ")
    .trim()
    .toLowerCase();
  console.log(cleanedCommandText);  

  if (cleanedCommandText.match(/^(hello|hi|hey)$/)) {
    commandDetails.commandType = "greet";
    return commandDetails;
  } else if (cleanedCommandText.includes("my name is")) {
    const name = commandText.replace(/.*my name is/gi, "").trim();

    commandDetails.commandType = "setName";
    commandDetails.inputData = name;

    return commandDetails;
  } else if (cleanedCommandText.includes("what is my name")) {
    commandDetails.commandType = "tellName";
    return commandDetails;
  } else if (
    cleanedCommandText.includes("show") &&
    cleanedCommandText.includes("todo list")
  ) {
    commandDetails.commandType = "showAllToDo";
    return commandDetails;
  } else if (
    cleanedCommandText.includes("my todo") &&
    cleanedCommandText.includes("add")
  ) {
    commandDetails.commandType = "todo";
    return commandDetails;
  } else if (
    cleanedCommandText.includes("remove") &&
    cleanedCommandText.includes("from my todo")
  ) {
    commandDetails.commandType = "remove";
    return commandDetails;
  } else if (cleanedCommandText.includes("what day") || cleanedCommandText.includes("today")) {
    commandDetails.commandType = "day";
    return commandDetails;
  } else if (cleanedCommandText.includes("set a timer")) {
    commandDetails.commandType = "set";
    return commandDetails;
  } else if (cleanedCommandText.match(regexDict.math)) {
    commandDetails.commandType = "calculate";
    return commandDetails;
  }

  return commandDetails;
}

function addTodoCommand(commandText) {
  const regex = regexDict.add;

  const matches = regex.exec(commandText);
  BOT_MEMORY.todoList.push(matches.groups.itemName);
  console.log(matches.groups.itemName);
  regex.lastIndex = 0;

  if (matches && matches.groups) {
    return matches.groups.itemName + " added to your todo";
  } else {
      `Please enter the valid expression`;
  }
}

function removeTodoCommand(commandText) {
  const regex = regexDict.remove;
  regex.lastIndex = 0;

  const matches = regex.exec(commandText);
  BOT_MEMORY.todoList.pop(matches.groups.itemName);

  if (matches && matches.groups) {
    return matches.groups.itemName + " remove from your todo";
  } else {
      `Please enter the valid expression`;
  }
}

function getDay() {
  const monthsName = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObject = new Date();
  const month = monthsName[dateObject.getMonth()];
  const day = String(dateObject.getDate()).padStart(2, "0");
  const year = dateObject.getFullYear();

  const today = `${day}. of ${month} ${year}`;

  return today;
}

function simpleMath(commandText) {
  const regex = regexDict.math;
  const matches = regex.exec(commandText);

  if (!matches) {
    return `Please enter valid expression`;
  }

  const a = parseFloat(matches.groups.variable1);
  const b = parseFloat(matches.groups.variable2);
  console.log(a);

  const operator = matches.groups.operator;
  console.log(a, b, operator, matches.groups);
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return `please enter correct operator`;
  }
}

function setTime(text) {
  const matches = text.match(regexDict.time);

  let durationInMiliSeconds;
  let unit;
  if (matches) {
    const num = parseFloat(matches.groups.duration);
    if (text.toLowerCase().includes("minute")) {
      durationInMiliSeconds = 1000 * 60 * num;
      unit = "minutes";
    } else if (text.toLowerCase().includes("second")) {
      durationInMiliSeconds = 1000 * num;
      unit = "seconds";
    }

    setTimeout(() => {
      writeBotResponse(`Timer for ${num} ${unit} completed`);
    }, durationInMiliSeconds);

    return `Timer is set for ${num} ${unit}`;
  }
}

//console.log(parseAddTodoCommand("Add fishing to my todo"));
//console.log(parseAddTodoCommand("Add fishing and cooking to my todo"));
//console.log(parseAddTodoCommand("I am wrong to my todo"));

const BOT_MEMORY = {
  currentUserName: undefined,
  todoList: [],
};

const writeUserInput = (text) => {
  const userHandle = BOT_MEMORY.currentUserName || "You";
  writeToChatRoom(userHandle, text);
};
const writeBotResponse = (text) => writeToChatRoom("@bot", text);

function getReply(command) {
  writeUserInput(command);

  const { commandType, inputData } = parseCommand(command);

  switch (commandType) {
    case "unknown":
      writeBotResponse(`Sorry, I don't know how to help with that yet.`);
      break;
    case "greet":
      writeBotResponse(`Hola! 👋👋😊`);
      break;
    case "setName":
      BOT_MEMORY.currentUserName = inputData;
      writeBotResponse(`Nice to meet you ${BOT_MEMORY.currentUserName} 👋👋😊`);
      break;
    case "tellName":
      if (BOT_MEMORY.currentUserName) {
        writeBotResponse(
          `You told me that you're ${BOT_MEMORY.currentUserName}.`
        );
      } else {
        writeBotResponse(`You never told me that, 😐`);
      }
      break;
    case "showAllToDo":
      if (BOT_MEMORY.todoList) {
        writeBotResponse(BOT_MEMORY.todoList.join(',\n'));
      }
      break;

    case "todo":
      if (BOT_MEMORY.todoList) {
        writeBotResponse(addTodoCommand(command));
      }
      break;
    case "remove":
      if (BOT_MEMORY.todoList) {
        writeBotResponse(removeTodoCommand(command));
      }
      break;
    case "day":
      writeBotResponse(getDay(command));
      break;
    case "set":
      writeBotResponse(setTime(command));
      break;
    case "calculate":
      writeBotResponse(simpleMath(command));
      break;
  }
}

getReply("What is my name");
//getReply("Hello my name is Benjamin");
//getReply("What is my name");
