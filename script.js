var city = "";
var formattedHours = "";
var lastFetchedData = "";

document
    .getElementById("myInput")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            city = event.target.value;
            console.log(city + " is the city name.");
            getWeather();
        }
    });

async function getWeather() {
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
    document.getElementById("today1").innerHTML = `
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
    document.getElementById("nextday1").innerHTML = `
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
    /*    document.getElementById("nextday").innerHTML += `
<p>0 AM: <br/> ${nextday0temp}(${nextday0feelsc})°C, Wind Speed - ${nextday0windspeed} km/h, ${nextday0winddir} <br/> Condition - ${nextday0weatherdesc}</p>
<p>3 AM: <br/> ${nextday1temp}(${nextday1feelsc})°C, Wind Speed - ${nextday1windspeed} km/h, ${nextday1winddir} <br/> Condition - ${nextday1weatherdesc}</p>
<p>6 AM: <br/> ${nextday2temp}(${nextday2feelsc})°C, Wind Speed - ${nextday2windspeed} km/h, ${nextday2winddir} <br/> Condition - ${nextday2weatherdesc}</p>
<p>9 AM: <br/> ${nextday3temp}(${nextday3feelsc})°C, Wind Speed - ${nextday3windspeed} km/h, ${nextday3winddir} <br/> Condition - ${nextday3weatherdesc}</p>
<p>12 PM: <br/> ${nextday4temp}(${nextday4feelsc})°C, Wind Speed - ${nextday4windspeed} km/h, ${nextday4winddir} <br/> Condition - ${nextday4weatherdesc}</p>
<p>3 PM: <br/> ${nextday5temp}(${nextday5feelsc})°C, Wind Speed - ${nextday5windspeed} km/h, ${nextday5winddir} <br/> Condition - ${nextday5weatherdesc}</p>
<p>6 PM: <br/> ${nextday6temp}(${nextday6feelsc})°C, Wind Speed - ${nextday6windspeed} km/h, ${nextday6winddir} <br/> Condition - ${nextday6weatherdesc}</p>
<p>9 PM: <br/> ${nextday7temp}(${nextday7feelsc})°C, Wind Speed - ${nextday7windspeed} km/h, ${nextday7winddir} <br/> Condition - ${nextday7weatherdesc}</p>
`;
*/
    // For Overmorrow
    document.getElementById("nextnextday1").innerHTML = `
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

    /*
    if (4 < formattedHours < 7) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, #00223E 0%, #FFA17F 100%)"
        );
    }
    if (18 < formattedHours < 20) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, #0B486B 0%, #F56217 100%)"
        );
    }
    if (20 < formattedHours < 23) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, saddlebrown 0%, #19547b 100%)"
        );
    }
*/
    if (temp > 40) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, #C02425 0%, #F0CB35 100%)"
        );
    }

    //------------------ graphs

    var todayTemps = {
        today0temp,
        today1temp,
        today2temp,
        today3temp,
        today4temp,
        today5temp,
        today6temp,
        today7temp
    };

    var todayFeels = {
        today0feelsc,
        today1feelsc,
        today2feelsc,
        today3feelsc,
        today4feelsc,
        today5feelsc,
        today6feelsc,
        today7feelsc
    };

    var ctx = document.getElementById("weatherCharttoday").getContext("2d");

    var tempValues = [];
    var feelsLikeValues = [];
    var labels = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];

    for (var i = 0; i <= 7; i++) {
        tempValues.push(todayTemps[`today${i}temp`]);
        feelsLikeValues.push(todayFeels[`today${i}feelsc`]);
    }

    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Temperature in °C",
                    data: tempValues,
                    borderColor: "#4CAF50", // Material Design Green
                    backgroundColor: "rgba(76, 175, 80, 0.2)", // Material Design Green with opacity
                    fill: true
                },
                {
                    label: "Feels-Like Temperature",
                    data: feelsLikeValues,
                    borderColor: "#2196F3", // Material Design Blue
                    backgroundColor: "rgba(33, 150, 243, 0.2)", // Material Design Blue with opacity
                    fill: true
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

    //------------------

    var nextdayTemps = {
        nextday0temp,
        nextday1temp,
        nextday2temp,
        nextday3temp,
        nextday4temp,
        nextday5temp,
        nextday6temp,
        nextday7temp
    };

    var nextdayFeels = {
        nextday0feelsc,
        nextday1feelsc,
        nextday2feelsc,
        nextday3feelsc,
        nextday4feelsc,
        nextday5feelsc,
        nextday6feelsc,
        nextday7feelsc
    };

    var ctx = document.getElementById("weatherChartnextday").getContext("2d");

    var tempValues = [];
    var feelsLikeValues = [];
    var labels = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];

    for (var i = 0; i <= 7; i++) {
        tempValues.push(nextdayTemps[`nextday${i}temp`]);
        feelsLikeValues.push(nextdayFeels[`nextday${i}feelsc`]);
    }

    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Temperature in °C",
                    data: tempValues,
                    borderColor: "#4CAF50", // Material Design Green
                    backgroundColor: "rgba(76, 175, 80, 0.2)", // Material Design Green with opacity
                    fill: true
                },
                {
                    label: "Feels-Like Temperature",
                    data: feelsLikeValues,
                    borderColor: "#2196F3", // Material Design Blue
                    backgroundColor: "rgba(33, 150, 243, 0.2)", // Material Design Blue with opacity
                    fill: true
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

    //------------------

    var nextnextdayTemps = {
        nextnextday0temp,
        nextnextday1temp,
        nextnextday2temp,
        nextnextday3temp,
        nextnextday4temp,
        nextnextday5temp,
        nextnextday6temp,
        nextnextday7temp
    };

    var nextnextdayFeels = {
        nextnextday0feelsc,
        nextnextday1feelsc,
        nextnextday2feelsc,
        nextnextday3feelsc,
        nextnextday4feelsc,
        nextnextday5feelsc,
        nextnextday6feelsc,
        nextnextday7feelsc
    };

    var ctx = document
        .getElementById("weatherChartnextnextday")
        .getContext("2d");

    var tempValues = [];
    var feelsLikeValues = [];
    var labels = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];

    for (var i = 0; i <= 7; i++) {
        tempValues.push(nextnextdayTemps[`nextnextday${i}temp`]);
        feelsLikeValues.push(nextnextdayFeels[`nextnextday${i}feelsc`]);
    }

    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Temperature in °C",
                    data: tempValues,
                    borderColor: "#4CAF50", // Material Design Green
                    backgroundColor: "rgba(76, 175, 80, 0.2)", // Material Design Green with opacity
                    fill: true
                },
                {
                    label: "Feels-Like Temperature",
                    data: feelsLikeValues,
                    borderColor: "#2196F3", // Material Design Blue
                    backgroundColor: "rgba(33, 150, 243, 0.2)", // Material Design Blue with opacity
                    fill: true
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

    /*    var ctx = document.getElementById('weatherChart').getContext('2d');

var tempValues = [];
var feelsLikeValues = [];
var labels = ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'];

// Assuming you have fetched the temperature and feels like temperature values from the API
for (var i = 0; i <= 7; i++) {
    tempValues.push(window[`today${i}temp`]);
    feelsLikeValues.push(window[`today${i}feelsc`]);
}

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Temperature',
            data: tempValues,
            borderColor: '#4CAF50', // Material Design Green
            backgroundColor: 'rgba(76, 175, 80, 0.2)', // Material Design Green with opacity
            fill: true
        }, {
            label: 'Feels Like Temperature',
            data: feelsLikeValues,
            borderColor: '#2196F3', // Material Design Blue
            backgroundColor: 'rgba(33, 150, 243, 0.2)', // Material Design Blue with opacity
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
*/
}
getWeather();
