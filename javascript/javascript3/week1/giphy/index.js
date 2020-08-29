const API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g";
console.log("Hello Bot");

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function getFormDataAsObject(formElement) {
  const formData = new FormData(formElement);

  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}

function renderGifsArray(gifsArray) {
  const outputDiv = document.querySelector("#output");

  if (!gifsArray.length) {
    outputDiv.innerHTML = '<h1 class="danger-text">No GIFs founds</h1>';
    return;
  }

  outputDiv.innerHTML = "";

  for (const gif of gifsArray) {
    const gridItemDiv = document.createElement("div");
    gridItemDiv.className = "grid-item";
    outputDiv.appendChild(gridItemDiv);

    // console.log(gif);
    const imgElement = document.createElement("img");
    imgElement.src = gif.images.fixed_height.url;
    // console.log(gif.images.fixed_height.url);

    gridItemDiv.appendChild(imgElement);
  }
}

function fetchAndShowTrendingGifs(offset = 0, limit = 5) {
  const url = `https://api.giphy.com/v1/videos/trending?api_key=${API_KEY}&offset=${offset}&limit=${limit}`;

  fetchJsonData(url).then((jsonData) => {
    console.log("Data loaded", jsonData);
    renderGifsArray(jsonData.data);
  });
}
// fetchAndShowTrendingGifs();

function searchAndShowGifs(query, count) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&offset=0&limit=${count}&q=${query}`;

  fetchJsonData(url).then((jsonData) => {
    console.log("Data loaded", jsonData);
    renderGifsArray(jsonData.data);
  });
}

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = getFormDataAsObject(searchForm);
  console.log(formData);

  const searchText = formData.searchText.trim();
  const count = parseInt(formData.count);

  if (!searchText) {
    alert('Please enter valid search text, e.g. "smile"');
    return;
  }

  if (isNaN(count) || count < 1) {
    alert(`Count of gifs should be a positive integer, e.g. "10"`);
    return;
  }

  searchAndShowGifs(searchText, count);
});
