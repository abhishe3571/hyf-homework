function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//console.log(makeid(5));

function getRandomInteger(start, end) {
  return start + Math.floor(Math.random() * (end + 1 - start));
}

function getPromiseOfRandomTimeout() {
  const id = makeid(10);

  const timeoutInSeconds = getRandomInteger(1, 5);

  console.log(`ID ${id}: Scheduled to run after ${timeoutInSeconds} seconds`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* resolve({
        id,
        timeoutInSeconds,
      }); */
      reject({
        id,
        reason: "Mood nhi hai abhi!",
      });
    }, timeoutInSeconds * 1000);
  });
}

function getAstronautsOld() {
  fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((astronauts) => {
      console.log(astronauts);
    });
  console.log(astronauts);
}

// Warm up exercise. The students has to say everything they can about a variable, ONLY from the variable name. Fx the type, what it returns, what object we could expect etc.
// cars, car, title, getTitle, addTitle, isTitle, hasTitle, hasItem, users, year, yearIndex, user, review.
// DONT EXPLAIN WHAT ASYNC OR AWAIT DOES YET! Explain on a higher level:
// You have to write async before a function for await to work. No details for now
// await waits until we have fetched the data from the api. Or said in another way await waits until fetch has resolved with the data from the api

// write async before a function for await to work. What does it mean that something is asynchronous?
async function getAstronauts() {
  // await waits until we have data from fetch before it runs the next line. No need for callbacks 🤯
  console.log("Before we fetch data");
  const astronautsResponse = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  console.log(
    "This is logged out after some time, even though the code looks synchronous! 🤯"
  );
  const astronauts = await astronautsResponse.json();
  console.log("This is logged out after some time! 🤯");
  console.log(astronauts);
  return astronauts;
}

//const myAsyncFn = async () => {};


async function getPromise() {
  try {
    const data = await getPromiseOfRandomTimeout();
    console.log("Success", data);
  } catch (error) {
    console.log("Error ocurred", error);
  }
}

for (let i = 0; i <= 10; ++i) {
  getPromise();
}
