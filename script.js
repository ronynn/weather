var city = "";
var formattedHours = "";
var lastFetchedData = "";

document
  .getElementById("myInput")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      city = event.target.value;
      console.log(city + " is the city name.");
      getWeather();
    }
  });





document.addEventListener("DOMContentLoaded", function() {
  const favoriteButton = document.getElementById("favoriteButton");
  const favoriteDetails = document.getElementById("favoriteDetails");
  const favoriteList = document.getElementById("favoriteList");

  // Retrieve favorite locations from local storage or initialize with default values
  const favoriteLocations = JSON.parse(
    localStorage.getItem("favoriteLocations")
  ) || ["Paris", "Taki", "Tokyo"];

  // Render favorite locations
  favoriteLocations.forEach(location => {
    renderFavoriteLocation(location);
  });

  // Display weather for the first favorite location or a default city if none
  const defaultCity =
    favoriteLocations.length > 0 ? favoriteLocations[0] : "";
  getWeatherSaved(defaultCity);

  function renderFavoriteLocation(location) {
    const locationDiv = document.createElement("div");
    const locationButton = document.createElement("a");
    locationButton.textContent = location;
    locationButton.addEventListener("click", () => {
      getWeatherSaved(location);
    });
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      // Remove the location from favorites
      const index = favoriteLocations.indexOf(location);
      if (index !== -1) {
        favoriteLocations.splice(index, 1);
        // Update the local storage
        localStorage.setItem(
          "favoriteLocations",
          JSON.stringify(favoriteLocations)
        );
        // Update the UI
        favoriteList.removeChild(locationDiv);
      }
    });
    locationDiv.appendChild(removeButton);
    locationDiv.appendChild(locationButton);

    favoriteList.appendChild(locationDiv);
  }

  favoriteButton.addEventListener("click", function() {
    const currentCity = city; // Ensure 'city' is defined in your code
    if (!favoriteLocations.includes(currentCity)) {
      favoriteLocations.push(currentCity);
      renderFavoriteLocation(currentCity);
      // Update the local storage
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify(favoriteLocations)
      );
    }
  });
});


async function getWeatherSaved(city) {
  var api_url = `https://wttr.in/${city}?format=j1`;
  console.log("API URL: " + api_url);

  try {
    const response = await fetch(api_url);
    const data = await response.json();
    lastFetchedData = data;
    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    if (lastFetchedData) {
      console.log("Displaying last fetched data.");
      displayWeatherData(lastFetchedData);
    } else {
      console.log("No last fetched data available.");
      // Handle error gracefully or show a message to the user
    }
  }
}




async function getWeather() {
  var api_url = `https://wttr.in/${city}?format=j1`;
  console.log("API URL from getWeather(): " + api_url);

  try {
    const response = await fetch(api_url);
    const data = await response.json();
    lastFetchedData = data;
    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    if (lastFetchedData) {
      console.log("Displaying last fetched data.");
      displayWeatherData(lastFetchedData);
    } else {
      console.log("No last fetched data available.");
      // Handle error gracefully or show a message to the user
    }
  }
}



function displayWeatherData(data) {
  let loc = data.nearest_area[0].areaName[0].value;
  let region = data.nearest_area[0].region[0].value;

  let temp = data.current_condition[0].temp_C;
  let maxtemp = data.weather[0].maxtempC;
  let mintemp = data.weather[0].mintempC;

  let humidity = data.current_condition[0].humidity;
  let feel = data.current_condition[0].FeelsLikeC;
  let time = data.current_condition[0].localObsDateTime;
  let desc = data.current_condition[0].weatherDesc[0].value;
  let wCode = data.current_condition[0].weatherCode;
  let wind = data.current_condition[0].windspeedKmph;
  let dir = data.current_condition[0].winddir16Point;
  let uv = data.current_condition[0].uvIndex;

  let nextdaymax = data.weather[1].maxtempC;
  let nextdaymin = data.weather[1].mintempC;

  let nextnextdaymax = data.weather[2].maxtempC;
  let nextnextdaymin = data.weather[2].mintempC;

  // ------------------------- today
  let todaydate = data.weather[0].date;
  // 0am
  let today0temp = data.weather[0].hourly[0].tempC;
  let today0winddir = data.weather[0].hourly[0].winddir16Point;
  let today0windspeed = data.weather[0].hourly[0].windspeedKmph;
  let today0weatherdesc = data.weather[0].hourly[0].weatherDesc[0].value;

  // 3am
  let today1temp = data.weather[0].hourly[1].tempC;
  let today1winddir = data.weather[0].hourly[1].winddir16Point;
  let today1windspeed = data.weather[0].hourly[1].windspeedKmph;
  let today1weatherdesc = data.weather[0].hourly[1].weatherDesc[0].value;

  // 6am
  let today2temp = data.weather[0].hourly[2].tempC;
  let today2winddir = data.weather[0].hourly[2].winddir16Point;
  let today2windspeed = data.weather[0].hourly[2].windspeedKmph;
  let today2weatherdesc = data.weather[0].hourly[2].weatherDesc[0].value;

  // 9am
  let today3temp = data.weather[0].hourly[3].tempC;
  let today3winddir = data.weather[0].hourly[3].winddir16Point;
  let today3windspeed = data.weather[0].hourly[3].windspeedKmph;
  let today3weatherdesc = data.weather[0].hourly[3].weatherDesc[0].value;

  // 12pm
  let today4temp = data.weather[0].hourly[4].tempC;
  let today4winddir = data.weather[0].hourly[4].winddir16Point;
  let today4windspeed = data.weather[0].hourly[4].windspeedKmph;
  let today4weatherdesc = data.weather[0].hourly[4].weatherDesc[0].value;

  // 3pm
  let today5temp = data.weather[0].hourly[5].tempC;
  let today5winddir = data.weather[0].hourly[5].winddir16Point;
  let today5windspeed = data.weather[0].hourly[5].windspeedKmph;
  let today5weatherdesc = data.weather[0].hourly[5].weatherDesc[0].value;

  // 6pm
  let today6temp = data.weather[0].hourly[6].tempC;
  let today6winddir = data.weather[0].hourly[6].winddir16Point;
  let today6windspeed = data.weather[0].hourly[6].windspeedKmph;
  let today6weatherdesc = data.weather[0].hourly[6].weatherDesc[0].value;

  // 9pm
  let today7temp = data.weather[0].hourly[7].tempC;
  let today7winddir = data.weather[0].hourly[7].winddir16Point;
  let today7windspeed = data.weather[0].hourly[7].windspeedKmph;
  let today7weatherdesc = data.weather[0].hourly[7].weatherDesc[0].value;

  // ----------------------- nextday
  let nextdaydate = data.weather[1].date;
  // 0am
  let nextday0temp = data.weather[1].hourly[0].tempC;
  let nextday0winddir = data.weather[1].hourly[0].winddir16Point;
  let nextday0windspeed = data.weather[1].hourly[0].windspeedKmph;
  let nextday0weatherdesc = data.weather[1].hourly[0].weatherDesc[0].value;

  // 3am
  let nextday1temp = data.weather[1].hourly[1].tempC;
  let nextday1winddir = data.weather[1].hourly[1].winddir16Point;
  let nextday1windspeed = data.weather[1].hourly[1].windspeedKmph;
  let nextday1weatherdesc = data.weather[1].hourly[1].weatherDesc[0].value;

  // 6am
  let nextday2temp = data.weather[1].hourly[2].tempC;
  let nextday2winddir = data.weather[1].hourly[2].winddir16Point;
  let nextday2windspeed = data.weather[1].hourly[2].windspeedKmph;
  let nextday2weatherdesc = data.weather[1].hourly[2].weatherDesc[0].value;

  // 9am
  let nextday3temp = data.weather[1].hourly[3].tempC;
  let nextday3winddir = data.weather[1].hourly[3].winddir16Point;
  let nextday3windspeed = data.weather[1].hourly[3].windspeedKmph;
  let nextday3weatherdesc = data.weather[1].hourly[3].weatherDesc[0].value;

  // 12pm
  let nextday4temp = data.weather[1].hourly[4].tempC;
  let nextday4winddir = data.weather[1].hourly[4].winddir16Point;
  let nextday4windspeed = data.weather[1].hourly[4].windspeedKmph;
  let nextday4weatherdesc = data.weather[1].hourly[4].weatherDesc[0].value;

  // 3pm
  let nextday5temp = data.weather[1].hourly[5].tempC;
  let nextday5winddir = data.weather[1].hourly[5].winddir16Point;
  let nextday5windspeed = data.weather[1].hourly[5].windspeedKmph;
  let nextday5weatherdesc = data.weather[1].hourly[5].weatherDesc[0].value;

  // 6pm
  let nextday6temp = data.weather[1].hourly[6].tempC;
  let nextday6winddir = data.weather[1].hourly[6].winddir16Point;
  let nextday6windspeed = data.weather[1].hourly[6].windspeedKmph;
  let nextday6weatherdesc = data.weather[1].hourly[6].weatherDesc[0].value;

  // 9pm
  let nextday7temp = data.weather[1].hourly[7].tempC;
  let nextday7winddir = data.weather[1].hourly[7].winddir16Point;
  let nextday7windspeed = data.weather[1].hourly[7].windspeedKmph;
  let nextday7weatherdesc = data.weather[1].hourly[7].weatherDesc[0].value;

  // ----------------------- nextnextday
  let nextnextdaydate = data.weather[2].date;
  // 0am
  let nextnextday0temp = data.weather[2].hourly[0].tempC;
  let nextnextday0winddir = data.weather[2].hourly[0].winddir16Point;
  let nextnextday0windspeed = data.weather[2].hourly[0].windspeedKmph;
  let nextnextday0weatherdesc =
    data.weather[2].hourly[0].weatherDesc[0].value;

  // 3am
  let nextnextday1temp = data.weather[2].hourly[1].tempC;
  let nextnextday1winddir = data.weather[2].hourly[1].winddir16Point;
  let nextnextday1windspeed = data.weather[2].hourly[1].windspeedKmph;
  let nextnextday1weatherdesc =
    data.weather[2].hourly[1].weatherDesc[0].value;

  // 6am
  let nextnextday2temp = data.weather[2].hourly[2].tempC;
  let nextnextday2winddir = data.weather[2].hourly[2].winddir16Point;
  let nextnextday2windspeed = data.weather[2].hourly[2].windspeedKmph;
  let nextnextday2weatherdesc =
    data.weather[2].hourly[2].weatherDesc[0].value;

  // 9am
  let nextnextday3temp = data.weather[2].hourly[3].tempC;
  let nextnextday3winddir = data.weather[2].hourly[3].winddir16Point;
  let nextnextday3windspeed = data.weather[2].hourly[3].windspeedKmph;
  let nextnextday3weatherdesc =
    data.weather[2].hourly[3].weatherDesc[0].value;

  // 12pm
  let nextnextday4temp = data.weather[2].hourly[4].tempC;
  let nextnextday4winddir = data.weather[2].hourly[4].winddir16Point;
  let nextnextday4windspeed = data.weather[2].hourly[4].windspeedKmph;
  let nextnextday4weatherdesc =
    data.weather[2].hourly[4].weatherDesc[0].value;

  // 3pm
  let nextnextday5temp = data.weather[2].hourly[5].tempC;
  let nextnextday5winddir = data.weather[2].hourly[5].winddir16Point;
  let nextnextday5windspeed = data.weather[2].hourly[5].windspeedKmph;
  let nextnextday5weatherdesc =
    data.weather[2].hourly[5].weatherDesc[0].value;

  // 6pm
  let nextnextday6temp = data.weather[2].hourly[6].tempC;
  let nextnextday6winddir = data.weather[2].hourly[6].winddir16Point;
  let nextnextday6windspeed = data.weather[2].hourly[6].windspeedKmph;
  let nextnextday6weatherdesc =
    data.weather[2].hourly[6].weatherDesc[0].value;

  // 9pm
  let nextnextday7temp = data.weather[2].hourly[7].tempC;
  let nextnextday7winddir = data.weather[2].hourly[7].winddir16Point;
  let nextnextday7windspeed = data.weather[2].hourly[7].windspeedKmph;
  let nextnextday7weatherdesc =
    data.weather[2].hourly[7].weatherDesc[0].value;

  //----------------------- later addition

  let today0feelsc = data.weather[0].hourly[0].FeelsLikeC;
  let today1feelsc = data.weather[0].hourly[1].FeelsLikeC;
  let today2feelsc = data.weather[0].hourly[2].FeelsLikeC;
  let today3feelsc = data.weather[0].hourly[3].FeelsLikeC;
  let today4feelsc = data.weather[0].hourly[4].FeelsLikeC;
  let today5feelsc = data.weather[0].hourly[5].FeelsLikeC;
  let today6feelsc = data.weather[0].hourly[6].FeelsLikeC;
  let today7feelsc = data.weather[0].hourly[7].FeelsLikeC;

  let nextday0feelsc = data.weather[1].hourly[0].FeelsLikeC;
  let nextday1feelsc = data.weather[1].hourly[1].FeelsLikeC;
  let nextday2feelsc = data.weather[1].hourly[2].FeelsLikeC;
  let nextday3feelsc = data.weather[1].hourly[3].FeelsLikeC;
  let nextday4feelsc = data.weather[1].hourly[4].FeelsLikeC;
  let nextday5feelsc = data.weather[1].hourly[5].FeelsLikeC;
  let nextday6feelsc = data.weather[1].hourly[6].FeelsLikeC;
  let nextday7feelsc = data.weather[1].hourly[7].FeelsLikeC;

  let nextnextday0feelsc = data.weather[2].hourly[0].FeelsLikeC;
  let nextnextday1feelsc = data.weather[2].hourly[1].FeelsLikeC;
  let nextnextday2feelsc = data.weather[2].hourly[2].FeelsLikeC;
  let nextnextday3feelsc = data.weather[2].hourly[3].FeelsLikeC;
  let nextnextday4feelsc = data.weather[2].hourly[4].FeelsLikeC;
  let nextnextday5feelsc = data.weather[2].hourly[5].FeelsLikeC;
  let nextnextday6feelsc = data.weather[2].hourly[6].FeelsLikeC;
  let nextnextday7feelsc = data.weather[2].hourly[7].FeelsLikeC;

  // ---------------
  function getCurrentDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedDate = `${day}, ${date} ${month} ${year}, ${formattedHours}:${formattedMinutes}`;

    return formattedDate;
  }

  document.getElementById("loc").innerHTML = loc + ", " + region + "<br/>";
  document.getElementById("date").innerHTML = getCurrentDate();
  document.getElementById("desc").innerHTML = desc;
  document.getElementById("temp").innerHTML = temp + "&deg;C";
  document.getElementById("minmax").innerHTML =
    maxtemp + "&deg;C" + "<hr/>" + mintemp + "&deg;C";

  document.getElementById("detailsnow").innerHTML =
    "Feels: " +
    feel +
    "&degC<br/>UV: " +
    uv +
    "<br/>Humidity: " +
    humidity +
    "%<br/>Wind: " +
    wind +
    "k/h" +
    dir;

  document.getElementById("tomorrow").innerHTML =
    "Tomorrow" +
    "<hr/>" +
    "Max: " +
    nextdaymax +
    "&deg;C" +
    "<hr/>" +
    "Min: " +
    nextdaymin;

  document.getElementById("overmorrow").innerHTML =
    "Overmorrow" +
    "<hr/>" +
    "Max: " +
    nextnextdaymax +
    "&deg;C" +
    "<hr/>" +
    "Min: " +
    nextnextdaymin;

  // For Today
  document.getElementById("today1").innerHTML = ` <center>
Today in ${loc}, ${region} <br/> (${todaydate})</center> <br/>
<table>
  <tr>
    <th>Time</th>
    <th>Temp</th>
    <th>Wind (km/h)</th>
    <th>Condition</th>
  </tr>
  <tr>
    <td>0 AM</td>
    <td>${today0temp}(<span style="color:lightgray">${today0feelsc}</span>)°C</td>
    <td>${today0windspeed}, ${today0winddir}</td>
    <td>${today0weatherdesc}</td>
  </tr>
  <tr>
    <td>3 AM</td>
    <td>${today1temp}(<span style="color: lightgray">${today1feelsc}</span>)°C</td>
    <td>${today1windspeed}, ${today1winddir}</td>
    <td>${today1weatherdesc}</td>
  </tr>
  <tr>
    <td>6 AM</td>
    <td>${today2temp}(<span style="color: lightgray">${today2feelsc}</span>)°C</td>
    <td>${today2windspeed}, ${today2winddir}</td>
    <td>${today2weatherdesc}</td>
  </tr>
  <tr>
    <td>9 AM</td>
    <td>${today3temp}(<span style="color: lightgray">${today3feelsc}</span>)°C</td>
    <td>${today3windspeed}, ${today3winddir}</td>
    <td>${today3weatherdesc}</td>
  </tr>
  <tr>
    <td>12 PM</td>
    <td>${today4temp}(<span style="color: lightgray">${today4feelsc}</span>)°C</td>
    <td>${today4windspeed}, ${today4winddir}</td>
    <td>${today4weatherdesc}</td>
  </tr>
  <tr>
    <td>3 PM</td>
    <td>${today5temp}(<span style="color: lightgray">${today5feelsc}</span>)°C</td>
    <td>${today5windspeed}, ${today5winddir}</td>
    <td>${today5weatherdesc}</td>
  </tr>
  <tr>
    <td>6 PM</td>
    <td>${today6temp}(<span style="color: lightgray">${today6feelsc}</span>)°C</td>
    <td>${today6windspeed}, ${today6winddir}</td>
    <td>${today6weatherdesc}</td>
  </tr>
  <tr>
    <td>9 PM</td>
    <td>${today7temp}(<span style="color: lightgray">${today7feelsc}</span>)°C</td>
    <td>${today7windspeed}, ${today7winddir}</td>
    <td>${today7weatherdesc}</td>
  </tr>
</table>
<br/>
`;
  // For Tomorrow
  document.getElementById("nextday1").innerHTML = ` <center>
    Tommorow in ${loc}, ${region} <br/> (${nextdaydate}) </center> <br/>
<table>
  <tr>
    <th>Time</th>
    <th>Temp</th>
    <th>Wind (km/h)</th>
    <th>Condition</th>
  </tr>
  <tr>
    <td>0 AM</td>
    <td>${nextday0temp}(<span style="color: lightgray">${nextday0feelsc}</span>)°C</td>
    <td>${nextday0windspeed}, ${nextday0winddir}</td>
    <td>${nextday0weatherdesc}</td>
  </tr>
  <tr>
    <td>3 AM</td>
    <td>${nextday1temp}(<span style="color: lightgray">${nextday1feelsc}</span>)°C</td>
    <td>${nextday1windspeed}, ${nextday1winddir}</td>
    <td>${nextday1weatherdesc}</td>
  </tr>
  <tr>
    <td>6 AM</td>
    <td>${nextday2temp}(<span style="color: lightgray">${nextday2feelsc}</span>)°C</td>
    <td>${nextday2windspeed}, ${nextday2winddir}</td>
    <td>${nextday2weatherdesc}</td>
  </tr>
  <tr>
    <td>9 AM</td>
    <td>${nextday3temp}(<span style="color: lightgray">${nextday3feelsc}</span>)°C</td>
    <td>${nextday3windspeed}, ${nextday3winddir}</td>
    <td>${nextday3weatherdesc}</td>
  </tr>
  <tr>
    <td>12 PM</td>
    <td>${nextday4temp}(<span style="color: lightgray">${nextday4feelsc}</span>)°C</td>
    <td>${nextday4windspeed}, ${nextday4winddir}</td>
    <td>${nextday4weatherdesc}</td>
  </tr>
  <tr>
    <td>3 PM</td>
    <td>${nextday5temp}(<span style="color: lightgray">${nextday5feelsc}</span>)°C</td>
    <td>${nextday5windspeed}, ${nextday5winddir}</td>
    <td>${nextday5weatherdesc}</td>
  </tr>
  <tr>
    <td>6 PM</td>
    <td>${nextday6temp}(<span style="color: lightgray">${nextday6feelsc}</span>)°C</td>
    <td>${nextday6windspeed}, ${nextday6winddir}</td>
    <td>${nextday6weatherdesc}</td>
  </tr>
  <tr>
    <td>9 PM</td>
    <td>${nextday7temp}(<span style="color: lightgray">${nextday7feelsc}</span>)°C</td>
    <td>${nextday7windspeed}, ${nextday7winddir}</td>
    <td>${nextday7weatherdesc}</td>
  </tr>
</table>
<br/>
`;

  // For Overmorrow
  document.getElementById("nextnextday1").innerHTML = ` <center>
Day after tommorow in ${loc}, ${region} <br/> (${nextnextdaydate}) </center><br/> 
<table>
  <tr>
    <th>Time</th>
    <th>Temp</th>
    <th>Wind (km/h)</th>
    <th>Condition</th>
  </tr>
  <tr>
    <td>0 AM</td>
    <td>${nextnextday0temp}(<span style="color: lightgray">${nextnextday0feelsc}</span>)°C</td>
    <td>${nextnextday0windspeed}, ${nextnextday0winddir}</td>
    <td>${nextnextday0weatherdesc}</td>
  </tr>
  <tr>
    <td>3 AM</td>
    <td>${nextnextday1temp}(<span style="color: lightgray">${nextnextday1feelsc}</span>)°C</td>
    <td>${nextnextday1windspeed}, ${nextnextday1winddir}</td>
    <td>${nextnextday1weatherdesc}</td>
  </tr>
  <tr>
    <td>6 AM</td>
    <td>${nextnextday2temp}(<span style="color: lightgray">${nextnextday2feelsc}</span>)°C</td>
    <td>${nextnextday2windspeed}, ${nextnextday2winddir}</td>
    <td>${nextnextday2weatherdesc}</td>
  </tr>
  <tr>
    <td>9 AM</td>
    <td>${nextnextday3temp}(<span style="color: lightgray">${nextnextday3feelsc}</span>)°C</td>
    <td>${nextnextday3windspeed}, ${nextnextday3winddir}</td>
    <td>${nextnextday3weatherdesc}</td>
  </tr>
  <tr>
    <td>12 PM</td>
    <td>${nextnextday4temp}(<span style="color: lightgray">${nextnextday4feelsc}</span>)°C</td>
    <td>${nextnextday4windspeed}, ${nextnextday4winddir}</td>
    <td>${nextnextday4weatherdesc}</td>
  </tr>
  <tr>
    <td>3 PM</td>
    <td>${nextnextday5temp}(<span style="color: lightgray">${nextnextday5feelsc}</span>)°C</td>
    <td>${nextnextday5windspeed}, ${nextnextday5winddir}</td>
    <td>${nextnextday5weatherdesc}</td>
  </tr>
  <tr>
    <td>6 PM</td>
    <td>${nextnextday6temp}(<span style="color: lightgray">${nextnextday6feelsc}</span>)°C</td>
    <td>${nextnextday6windspeed}, ${nextnextday6winddir}</td>
    <td>${nextnextday6weatherdesc}</td>
  </tr>
  <tr>
    <td>9 PM</td>
    <td>${nextnextday7temp}(<span style="color: lightgray">${nextnextday7feelsc}</span>)°C</td>
    <td>${nextnextday7windspeed}, ${nextnextday7winddir}</td>
    <td>${nextnextday7weatherdesc}</td>
  </tr>
</table>
<br/>
`;


  // -------


  // Function to load graphs.js 


  let chartJsLoaded = false;
  let chartsCreated = false;

  function loadChartJS() {
    if (!chartJsLoaded) {
      let script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.onload = () => {
        chartJsLoaded = true;
        createGraphs();
      };
      document.body.appendChild(script);
    } else if (!chartsCreated) {
      createGraphs();
    }
  }

  window.loadChartJS = loadChartJS;


  function createGraphs() {
    if (chartsCreated) return;
    chartsCreated = true;



    let graphsDiv = document.getElementById("graphs");



    // Create "Today" section
    let todayTitle = document.createElement("div");
    todayTitle.innerHTML = "Today<br /><br />";
    graphsDiv.appendChild(todayTitle);



    let canvasToday = document.createElement("canvas");
    canvasToday.id = "weatherCharttoday";
    canvasToday.width = 400;
    canvasToday.height = 200;
    graphsDiv.appendChild(canvasToday);



    // Create "Tomorrow" section
    let tomorrowTitle = document.createElement("div");
    tomorrowTitle.innerHTML = "Tomorrow<br /><br />";
    graphsDiv.appendChild(tomorrowTitle);



    let canvasTomorrow = document.createElement("canvas");
    canvasTomorrow.id = "weatherChartnextday";
    canvasTomorrow.width = 400;
    canvasTomorrow.height = 200;
    graphsDiv.appendChild(canvasTomorrow);



    // Create "Day after Tomorrow" section
    let nextnextTitle = document.createElement("div");
    nextnextTitle.innerHTML = "Day after Tomorrow<br /><br />";
    graphsDiv.appendChild(nextnextTitle);



    let canvasNextNext = document.createElement("canvas");
    canvasNextNext.id = "weatherChartnextnextday";
    canvasNextNext.width = 400;
    canvasNextNext.height = 200;
    graphsDiv.appendChild(canvasNextNext);



    initializeCharts();
  }



  function initializeCharts() {
    let labels = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];



    // --- Today's chart ---
    let todayTemps = {
      today0temp,
      today1temp,
      today2temp,
      today3temp,
      today4temp,
      today5temp,
      today6temp,
      today7temp
    };



    let todayFeels = {
      today0feelsc,
      today1feelsc,
      today2feelsc,
      today3feelsc,
      today4feelsc,
      today5feelsc,
      today6feelsc,
      today7feelsc
    };



    let todayWinds = {
      today0windspeed,
      today1windspeed,
      today2windspeed,
      today3windspeed,
      today4windspeed,
      today5windspeed,
      today6windspeed,
      today7windspeed
    };



    let ctxToday = document.getElementById("weatherCharttoday").getContext("2d");



    let tempValuesToday = [];
    let feelsLikeValuesToday = [];
    let windspeedValuesToday = [];



    for (let i = 0; i <= 7; i++) {
      tempValuesToday.push(todayTemps[`today${i}temp`]);
      feelsLikeValuesToday.push(todayFeels[`today${i}feelsc`]);
      windspeedValuesToday.push(todayWinds[`today${i}windspeed`]);
    }



    new Chart(ctxToday, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
            label: "Temperature in °C",
            data: tempValuesToday,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true
          },
          {
            label: "Feels-Like Temperature",
            data: feelsLikeValuesToday,
            borderColor: "#2196F3",
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            fill: true
          },
          {
            label: "Wind Speed Kmph",
            data: windspeedValuesToday,
            borderColor: "#9C27B0",
            fill: false
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



    // --- Tomorrow's chart ---
    let nextdayTemps = {
      nextday0temp,
      nextday1temp,
      nextday2temp,
      nextday3temp,
      nextday4temp,
      nextday5temp,
      nextday6temp,
      nextday7temp
    };



    let nextdayFeels = {
      nextday0feelsc,
      nextday1feelsc,
      nextday2feelsc,
      nextday3feelsc,
      nextday4feelsc,
      nextday5feelsc,
      nextday6feelsc,
      nextday7feelsc
    };



    let nextdayWinds = {
      nextday0windspeed,
      nextday1windspeed,
      nextday2windspeed,
      nextday3windspeed,
      nextday4windspeed,
      nextday5windspeed,
      nextday6windspeed,
      nextday7windspeed
    };



    let ctxTomorrow = document.getElementById("weatherChartnextday").getContext("2d");



    let tempValuesTomorrow = [];
    let feelsLikeValuesTomorrow = [];
    let windspeedValuesTomorrow = [];



    for (let i = 0; i <= 7; i++) {
      tempValuesTomorrow.push(nextdayTemps[`nextday${i}temp`]);
      feelsLikeValuesTomorrow.push(nextdayFeels[`nextday${i}feelsc`]);
      windspeedValuesTomorrow.push(nextdayWinds[`nextday${i}windspeed`]);
    }



    new Chart(ctxTomorrow, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
            label: "Temperature in °C",
            data: tempValuesTomorrow,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true
          },
          {
            label: "Feels-Like Temperature",
            data: feelsLikeValuesTomorrow,
            borderColor: "#2196F3",
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            fill: true
          },
          {
            label: "Wind Speed Kmph",
            data: windspeedValuesTomorrow,
            borderColor: "#9C27B0",
            fill: false
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



    // --- Day after Tomorrow's chart ---
    let nextnextdayTemps = {
      nextnextday0temp,
      nextnextday1temp,
      nextnextday2temp,
      nextnextday3temp,
      nextnextday4temp,
      nextnextday5temp,
      nextnextday6temp,
      nextnextday7temp
    };



    let nextnextdayFeels = {
      nextnextday0feelsc,
      nextnextday1feelsc,
      nextnextday2feelsc,
      nextnextday3feelsc,
      nextnextday4feelsc,
      nextnextday5feelsc,
      nextnextday6feelsc,
      nextnextday7feelsc
    };



    let nextnextdayWinds = {
      nextnextday0windspeed,
      nextnextday1windspeed,
      nextnextday2windspeed,
      nextnextday3windspeed,
      nextnextday4windspeed,
      nextnextday5windspeed,
      nextnextday6windspeed,
      nextnextday7windspeed
    };



    let ctxNextNext = document.getElementById("weatherChartnextnextday").getContext("2d");



    let tempValuesNextNext = [];
    let feelsLikeValuesNextNext = [];
    let windspeedValuesNextNext = [];



    for (let i = 0; i <= 7; i++) {
      tempValuesNextNext.push(nextnextdayTemps[`nextnextday${i}temp`]);
      feelsLikeValuesNextNext.push(nextnextdayFeels[`nextnextday${i}feelsc`]);
      windspeedValuesNextNext.push(nextnextdayWinds[`nextnextday${i}windspeed`]);
    }



    new Chart(ctxNextNext, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
            label: "Temperature in °C",
            data: tempValuesNextNext,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true
          },
          {
            label: "Feels-Like Temperature",
            data: feelsLikeValuesNextNext,
            borderColor: "#2196F3",
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            fill: true
          },
          {
            label: "Wind Speed Kmph",
            data: windspeedValuesNextNext,
            borderColor: "#9C27B0",
            fill: false
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}
getWeatherSaved(city);


function openTab(evt, tabName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tab = document.getElementById(tabName);
  tab.style.display = "block";
  tab.scrollIntoView({
    behavior: "smooth",
    block: "end"
  });



  if (tabName === "graphs") {
    window.loadChartJS();
  }
}