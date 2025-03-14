function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  document
    .getElementById(tabName)
    .scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const themeButton = document.getElementById("themeButton");

  // Define gradient presets
  const gradients = [
    "linear-gradient(to top, #4158d0, #c850c0)",
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #f953c6, #b91d73)",
    "linear-gradient(to right, #43cea2, #185a9d)"
  ];

  // Retrieve the last selected gradient index from local storage, or default to 0
  let currentGradientIndex = localStorage.getItem("currentGradientIndex") ?
    parseInt(localStorage.getItem("currentGradientIndex")) :
    0;

  // Function to change the background gradient
  function changeGradient() {
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
    document.body.style.background = gradients[currentGradientIndex];
    // Save the current gradient index to local storage
    localStorage.setItem("currentGradientIndex", currentGradientIndex);
  }

  // Add event listener to the button
  themeButton.addEventListener("click", changeGradient);

  // Set the initial gradient
  document.body.style.background = gradients[currentGradientIndex];
});

//--------------

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
      getWeather(city);
    }
  });

async function getWeather(city) {
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

document.addEventListener("DOMContentLoaded", function() {
  const favoriteButton = document.getElementById("favoriteButton");
  const favoriteDetails = document.getElementById("favoriteDetails");
  const favoriteList = document.getElementById("favoriteList");

  // Retrieve favorite locations from local storage or initialize with default values
  const favoriteLocations = JSON.parse(
    localStorage.getItem("favoriteLocations")
  ) || ["New York", "London", "Tokyo"];

  // Render favorite locations
  favoriteLocations.forEach(location => {
    renderFavoriteLocation(location);
  });

  // Display weather for the first favorite location or a default city if none
  const defaultCity =
    favoriteLocations.length > 0 ? favoriteLocations[0] : "New York";
  getWeather(defaultCity);

  function renderFavoriteLocation(location) {
    const locationDiv = document.createElement("div");
    const locationButton = document.createElement("button");
    locationButton.textContent = location;
    locationButton.addEventListener("click", () => {
      getWeather(location);
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
    locationDiv.appendChild(locationButton);
    locationDiv.appendChild(removeButton);
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

function displayWeatherData(data) {
  let loc = data.nearest_area[0].areaName[0].value;
  let region = data.nearest_area[0].region[0].value;
  let timee = data.current_condition[0].localObsDateTime;

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

  document.getElementById("loc").innerHTML = loc + ", " + region + "<br/>";
  document.getElementById("date").innerHTML = timee;
  document.getElementById("desc").innerHTML = desc;
  document.getElementById("temp").innerHTML = temp + "&deg;C";
  document.getElementById("minmax").innerHTML =
    maxtemp + "&deg;C" + "<hr/>" + mintemp + "&deg;C";

  document.getElementById("detailsnow").innerHTML =
    "Feels like: " +
    feel +
    "&degC<br/>Ultraviolet Index: " +
    uv +
    "<br/>Humidity: " +
    humidity +
    "%<br/>Wind: " +
    wind +
    "kmph from " +
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
  document.getElementById("today").innerHTML = `
        Today in ${loc}, ${region} <br/>(${todaydate}) <br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${today0temp}(<span style="color: #F0F0F0">${today0feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today0windspeed} km/h, ${today0winddir}</td>
            <td style="border: 1px solid white;">${today0weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${today1temp}(<span style="color: #F0F0F0">${today1feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today1windspeed} km/h, ${today1winddir}</td>
            <td style="border: 1px solid white;">${today1weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${today2temp}(<span style="color: #F0F0F0">${today2feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today2windspeed} km/h, ${today2winddir}</td>
            <td style="border: 1px solid white;">${today2weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${today3temp}(<span style="color: #F0F0F0">${today3feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today3windspeed} km/h, ${today3winddir}</td>
            <td style="border: 1px solid white;">${today3weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${today4temp}(<span style="color: #F0F0F0">${today4feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today4windspeed} km/h, ${today4winddir}</td>
            <td style="border: 1px solid white;">${today4weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${today5temp}(<span style="color: #F0F0F0">${today5feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today5windspeed} km/h, ${today5winddir}</td>
            <td style="border: 1px solid white;">${today5weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${today6temp}(<span style="color: #F0F0F0">${today6feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today6windspeed} km/h, ${today6winddir}</td>
            <td style="border: 1px solid white;">${today6weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${today7temp}(<span style="color: #F0F0F0">${today7feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${today7windspeed} km/h, ${today7winddir}</td>
            <td style="border: 1px solid white;">${today7weatherdesc}</td>
          </tr>
        </table>
        <br/>
        `;

  // For Tomorrow
  document.getElementById("nextday").innerHTML = `
            Tommorow in ${loc}, ${region} <br/> (${nextdaydate}) <br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${nextday0temp}(<span style="color: #F0F0F0">${nextday0feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday0windspeed} km/h, ${nextday0winddir}</td>
            <td style="border: 1px solid white;">${nextday0weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${nextday1temp}(<span style="color: #F0F0F0">${nextday1feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday1windspeed} km/h, ${nextday1winddir}</td>
            <td style="border: 1px solid white;">${nextday1weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${nextday2temp}(<span style="color: #F0F0F0">${nextday2feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday2windspeed} km/h, ${nextday2winddir}</td>
            <td style="border: 1px solid white;">${nextday2weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${nextday3temp}(<span style="color: #F0F0F0">${nextday3feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday3windspeed} km/h, ${nextday3winddir}</td>
            <td style="border: 1px solid white;">${nextday3weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${nextday4temp}(<span style="color: #F0F0F0">${nextday4feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday4windspeed} km/h, ${nextday4winddir}</td>
            <td style="border: 1px solid white;">${nextday4weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${nextday5temp}(<span style="color: #F0F0F0">${nextday5feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday5windspeed} km/h, ${nextday5winddir}</td>
            <td style="border: 1px solid white;">${nextday5weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${nextday6temp}(<span style="color: #F0F0F0">${nextday6feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday6windspeed} km/h, ${nextday6winddir}</td>
            <td style="border: 1px solid white;">${nextday6weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${nextday7temp}(<span style="color: #F0F0F0">${nextday7feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextday7windspeed} km/h, ${nextday7winddir}</td>
            <td style="border: 1px solid white;">${nextday7weatherdesc}</td>
          </tr>
        </table>
        <br/>
        `;

  // For Overmorrow

  document.getElementById("nextnextday").innerHTML = `
        Day after tommorow in ${loc}, ${region} <br/> (${nextnextdaydate})<br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${nextnextday0temp}(<span style="color: #F0F0F0">${nextnextday0feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday0windspeed} km/h, ${nextnextday0winddir}</td>
            <td style="border: 1px solid white;">${nextnextday0weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${nextnextday1temp}(<span style="color: #F0F0F0">${nextnextday1feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday1windspeed} km/h, ${nextnextday1winddir}</td>
            <td style="border: 1px solid white;">${nextnextday1weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${nextnextday2temp}(<span style="color: #F0F0F0">${nextnextday2feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday2windspeed} km/h, ${nextnextday2winddir}</td>
            <td style="border: 1px solid white;">${nextnextday2weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${nextnextday3temp}(<span style="color: #F0F0F0">${nextnextday3feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday3windspeed} km/h, ${nextnextday3winddir}</td>
            <td style="border: 1px solid white;">${nextnextday3weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${nextnextday4temp}(<span style="color: #F0F0F0">${nextnextday4feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday4windspeed} km/h, ${nextnextday4winddir}</td>
            <td style="border: 1px solid white;">${nextnextday4weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${nextnextday5temp}(<span style="color: #F0F0F0">${nextnextday5feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday5windspeed} km/h, ${nextnextday5winddir}</td>
            <td style="border: 1px solid white;">${nextnextday5weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${nextnextday6temp}(<span style="color: #F0F0F0">${nextnextday6feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday6windspeed} km/h, ${nextnextday6winddir}</td>
            <td style="border: 1px solid white;">${nextnextday6weatherdesc}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${nextnextday7temp}(<span style="color: #F0F0F0">${nextnextday7feelsc}</span>)°C</td>
            <td style="border: 1px solid white;">${nextnextday7windspeed} km/h, ${nextnextday7winddir}</td>
            <td style="border: 1px solid white;">${nextnextday7weatherdesc}</td>
          </tr>
        </table>
        <br/>
        `;
}
getWeather();