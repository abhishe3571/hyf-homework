/* Using async await

fetch yes or no from this api: https://yesno.wtf/api. log out the answer 
*/

async function getDataResponse() {
  console.log("Before we fetch data");
  const DataResponse = await fetch("https://yesno.wtf/api");

  const response = await DataResponse.json();
  console.log(response);
  return response;
}

getDataResponse();
