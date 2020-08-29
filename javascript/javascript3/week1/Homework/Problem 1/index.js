/* Problem1: Weather app
Lets create a weather app that based on a users location can find the relevant weather for that user.
*/
function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function getSelectedCity() {
  const cityName = document.querySelector("input");
  //console.log(cityName.value);
  if (cityName !== undefined) {
    return cityName.value.toLocaleLowerCase();
  }
}

 function findLocation() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      showMap(latitude, longitude);
    }

    function error() {
      status.textContent = "Unable to retrieve your location";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } 
  
  function showMap(latitude, longitude) {
    const map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude]),
        zoom: 16,
      }),
    });
  }
  
  //document.querySelector("#location-address").addEventListener("click", findLocation);



function getWeatherData() {
  const cityName = getSelectedCity();

  const key = "bf7a7cba8bd72a1c256622bf3a4f1261";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    key;

/*   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + latitude + "&lon=" + longitude + "&appid=" + key;
 */


  toggleLoader(true);
  toggleOutputDisplay(false);

  fetchJsonData(url).then((data) => {
    toggleLoader(false);
    console.log("response", data);
    displayWeatherData(data);
    //findLocation()
  });
}

 function toggleLoader(isVisible) {
  const container = document.querySelector('div.loader');
  container.style.display = isVisible ? 'block' : 'none';
 
}

function toggleOutputDisplay(isVisible) {
  const containerDiv = document.querySelector('div.container');
  containerDiv.style.display = isVisible ? 'block' : 'none';
} 

function displayWeatherData(data) {
  const iconcode = data.weather[0].icon;
  const iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  console.log(iconUrl);
  document.querySelector(".weather-icon").innerHTML = `<img src= ${iconUrl}>`;

  const celcius = Math.round(parseFloat(data.main.temp - 273));
  document.querySelector(
    ".temperature-value p"
  ).innerHTML = `${celcius}°<span>C</span>`;

  document.querySelector(".temperature-description p").innerHTML =
    data.weather[0].description;

  const windSpeed = Math.round(parseFloat(data.wind.speed * 3.6));
  document.querySelector(".wind-speed p").innerHTML = `wind: ${windSpeed} km/h`;

  const sunriseTime = new Date(data.sys.sunrise * 1000);
  document.querySelector(".sunrise p").innerHTML = `Sunrise: ${sunriseTime}`;

  const sunsetTime = new Date(data.sys.sunset * 1000);
  document.querySelector(".sunset p").innerHTML = `Sunset: ${sunsetTime}`;

  

  

  document.querySelector(
    ".location p"
  ).innerHTML = `City: ${data.name}, ${data.sys.country}`;
  console.log(sunriseTime);



  toggleOutputDisplay(true);

}


  

const button = document.querySelector("button");
button.addEventListener("click", getWeatherData);
