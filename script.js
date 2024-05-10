var city = "";
var formattedHours = "";

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

    const response = await fetch(api_url);
    const data = await response.json();
    const weath = data.current_condition[0];

    let loc = data.nearest_area[0].areaName[0].value;
    let region = data.nearest_area[0].region[0].value;

    let temp = weath.temp_C;
    let maxtemp = data.weather[0].maxtempC;
    let mintemp = data.weather[0].mintempC;

    let humidity = weath.humidity;
    let feel = weath.FeelsLikeC;
    let time = weath.localObsDateTime;
    let desc = weath.weatherDesc[0].value;
    let wCode = weath.weatherCode;
    let wind = weath.windspeedKmph;

    let dir = weath.winddir16Point;
    let uv = weath.uvIndex;

    let nextdaymax = data.weather[1].maxtempC;
    let nextdaymin = data.weather[1].mintempC;

    let nextnextdaymax = data.weather[2].maxtempC;
    let nextnextdaymin = data.weather[2].mintempC;

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

    document.getElementById("other").innerHTML =
        "Feels like: " +
        feel +
        "&degC<br/>Ultraviolet Index: " +
        uv +
        "<br/>Humidity: " +
        humidity +
        "%<br/>Wind: " +
        wind +
        "kmph from " +
        dir +
        "<br/> Last Satellite Data Fetch: " +
        time;

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

    if (
        wCode === "119" ||
        wCode === "122" ||
        wCode === "176" ||
        wCode === "179" ||
        wCode === "200" ||
        wCode === "263" ||
        wCode === "266" ||
        wCode === "296" ||
        wCode === "299" ||
        wCode === "302" ||
        wCode === "306" ||
        wCode === "308" ||
        wCode === "353" ||
        wCode === "356" ||
        wCode === "359" ||
        wCode === "386" ||
        wCode === "389"
    ) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "url(blue.png)"
        );
    }

    if (20 < formattedHours < 23) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, #ffd89b 0%, #19547b 100%)"
        );
    }
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

    if (temp > 40) {
        document.documentElement.style.setProperty(
            "--bg-image",
            "linear-gradient(to top, #C02425 0%, #F0CB35 100%)"
        );
    }

    if (uv >= 8) {
        document.getElementById("sunalert").innerHTML =
            "Avoid being outside during midday hours. Make sure you seek shade. Shirt, sunscreen and hat are a must! <br/>";
    }
    if (wind >= 15) {
        document.getElementById("sunalert").innerHTML +=
            "It's quite windy. <br/>";
    }
    if (temp > 42) {
        document.getElementById("sunalert").innerHTML +=
            "Weather very hot right now!";
    }
}
getWeather();
