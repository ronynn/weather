let city: string = "";
let formattedHours: string = "";

document
    .getElementById("myInput")
    .addEventListener("keypress", function (event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.preventDefault();
            city = (event.target as HTMLInputElement).value;
            console.log(city + " is the city name.");
            getWeather();
        }
    });

async function getWeather() {
    let api_url: string = `https://wttr.in/${city}?format=j1`;
    console.log("API URL: " + api_url);

    const response = await fetch(api_url);
    const data = await response.json();

    let loc: string = data.nearest_area[0].areaName[0].value;
    let region: string = data.nearest_area[0].region[0].value;

    let temp: string = data.current_condition[0].temp_C;
    let maxtemp: string = data.weather[0].maxtempC;
    let mintemp: string = data.weather[0].mintempC;

    let humidity: string = data.current_condition[0].humidity;
    let feel: string = data.current_condition[0].FeelsLikeC;
    let time: string = data.current_condition[0].localObsDateTime;
    let desc: string = data.current_condition[0].weatherDesc[0].value;
    let wCode: string = data.current_condition[0].weatherCode;
    let wind: string = data.current_condition[0].windspeedKmph;
    let dir: string = data.current_condition[0].winddir16Point;
    let uv: string = data.current_condition[0].uvIndex;

    let nextdaymax: string = data.weather[1].maxtempC;
    let nextdaymin: string = data.weather[1].mintempC;

    let nextnextdaymax: string = data.weather[2].maxtempC;
    let nextnextdaymin: string = data.weather[2].mintempC;

    // ------------------------- today

    // 0am
    let today0temp: string = data.weather[0].hourly[0].tempC;
    let today0winddir: string = data.weather[0].hourly[0].winddir16Point;
    let today0windspeed: string = data.weather[0].hourly[0].windspeedKmph;
    let today0weatherdesc: string =
        data.weather[0].hourly[0].weatherDesc[0].value;

    // 3am
    let today1temp: string = data.weather[0].hourly[1].tempC;
    let today1winddir: string = data.weather[0].hourly[1].winddir16Point;
    let today1windspeed: string = data.weather[0].hourly[1].windspeedKmph;
    let today1weatherdesc: string =
        data.weather[0].hourly[1].weatherDesc[0].value;

    // 6am
    let today2temp: string = data.weather[0].hourly[2].tempC;
    let today2winddir: string = data.weather[0].hourly[2].winddir16Point;
    let today2windspeed: string = data.weather[0].hourly[2].windspeedKmph;
    let today2weatherdesc: string =
        data.weather[0].hourly[2].weatherDesc[0].value;

    // 9am
    let today3temp: string = data.weather[0].hourly[3].tempC;
    let today3winddir: string = data.weather[0].hourly[3].winddir16Point;
    let today3windspeed: string = data.weather[0].hourly[3].windspeedKmph;
    let today3weatherdesc: string =
        data.weather[0].hourly[3].weatherDesc[0].value;

    // 12pm
    let today4temp: string = data.weather[0].hourly[4].tempC;
    let today4winddir: string = data.weather[0].hourly[4].winddir16Point;
    let today4windspeed: string = data.weather[0].hourly[4].windspeedKmph;
    let today4weatherdesc: string =
        data.weather[0].hourly[4].weatherDesc[0].value;

    // 3pm
    let today5temp: string = data.weather[0].hourly[5].tempC;
    let today5winddir: string = data.weather[0].hourly[5].winddir16Point;
    let today5windspeed: string = data.weather[0].hourly[5].windspeedKmph;
    let today5weatherdesc: string =
        data.weather[0].hourly[5].weatherDesc[0].value;

    // 6pm
    let today6temp: string = data.weather[0].hourly[6].tempC;
    let today6winddir: string = data.weather[0].hourly[6].winddir16Point;
    let today6windspeed: string = data.weather[0].hourly[6].windspeedKmph;
    let today6weatherdesc: string =
        data.weather[0].hourly[6].weatherDesc[0].value;

    // 9pm
    let today7temp: string = data.weather[0].hourly[7].tempC;
    let today7winddir: string = data.weather[0].hourly[7].winddir16Point;
    let today7windspeed: string = data.weather[0].hourly[7].windspeedKmph;
    let today7weatherdesc: string =
        data.weather[0].hourly[7].weatherDesc[0].value;

    // ----------------------- nextday
    // 0am
    let nextday0temp: string = data.weather[1].hourly[0].tempC;
    let nextday0winddir: string = data.weather[1].hourly[0].winddir16Point;
    let nextday0windspeed: string = data.weather[1].hourly[0].windspeedKmph;
    let nextday0weatherdesc: string =
        data.weather[1].hourly[0].weatherDesc[0].value;

    // 3am
    let nextday1temp: string = data.weather[1].hourly[1].tempC;
    let nextday1winddir: string = data.weather[1].hourly[1].winddir16Point;
    let nextday1windspeed: string = data.weather[1].hourly[1].windspeedKmph;
    let nextday1weatherdesc: string =
        data.weather[1].hourly[1].weatherDesc[0].value;

    // 6am
    let nextday2temp: string = data.weather[1].hourly[2].tempC;
    let nextday2winddir: string = data.weather[1].hourly[2].winddir16Point;
    let nextday2windspeed: string = data.weather[1].hourly[2].windspeedKmph;
    let nextday2weatherdesc: string =
        data.weather[1].hourly[2].weatherDesc[0].value;

    // 9am
    let nextday3temp: string = data.weather[1].hourly[3].tempC;
    let nextday3winddir: string = data.weather[1].hourly[3].winddir16Point;
    let nextday3windspeed: string = data.weather[1].hourly[3].windspeedKmph;
    let nextday3weatherdesc: string =
        data.weather[1].hourly[3].weatherDesc[0].value;

    // 12pm
    let nextday4temp: string = data.weather[1].hourly[4].tempC;
    let nextday4winddir: string = data.weather[1].hourly[4].winddir16Point;
    let nextday4windspeed: string = data.weather[1].hourly[4].windspeedKmph;
    let nextday4weatherdesc: string =
        data.weather[1].hourly[4].weatherDesc[0].value;

    // 3pm
    let nextday5temp: string = data.weather[1].hourly[5].tempC;
    let nextday5winddir: string = data.weather[1].hourly[5].winddir16Point;
    let nextday5windspeed: string = data.weather[1].hourly[5].windspeedKmph;
    let nextday5weatherdesc: string =
        data.weather[1].hourly[5].weatherDesc[0].value;

    // 6pm
    let nextday6temp: string = data.weather[1].hourly[6].tempC;
    let nextday6winddir: string = data.weather[1].hourly[6].winddir16Point;
    let nextday6windspeed: string = data.weather[1].hourly[6].windspeedKmph;
    let nextday6weatherdesc: string =
        data.weather[1].hourly[6].weatherDesc[0].value;

    // 9pm
    let nextday7temp: string = data.weather[1].hourly[7].tempC;
    let nextday7winddir: string = data.weather[1].hourly[7].winddir16Point;
    let nextday7windspeed: string = data.weather[1].hourly[7].windspeedKmph;
    let nextday7weatherdesc: string =
        data.weather[1].hourly[7].weatherDesc[0].value;

    // ----------------------- nextnextday

    // 0am
    let nextnextday0temp: string = data.weather[2].hourly[0].tempC;
    let nextnextday0winddir: string = data.weather[2].hourly[0].winddir16Point;
    let nextnextday0windspeed: string = data.weather[2].hourly[0].windspeedKmph;
    let nextnextday0weatherdesc: string =
        data.weather[2].hourly[0].weatherDesc[0].value;

    // 3am
    let nextnextday1temp: string = data.weather[2].hourly[1].tempC;
    let nextnextday1winddir: string = data.weather[2].hourly[1].winddir16Point;
    let nextnextday1windspeed: string = data.weather[2].hourly[1].windspeedKmph;
    let nextnextday1weatherdesc: string =
        data.weather[2].hourly[1].weatherDesc[0].value;

    // 6am
    let nextnextday2temp: string = data.weather[2].hourly[2].tempC;
    let nextnextday2winddir: string = data.weather[2].hourly[2].winddir16Point;
    let nextnextday2windspeed: string = data.weather[2].hourly[2].windspeedKmph;
    let nextnextday2weatherdesc: string =
        data.weather[2].hourly[2].weatherDesc[0].value;

    // 9am
    let nextnextday3temp: string = data.weather[2].hourly[3].tempC;
    let nextnextday3winddir: string = data.weather[2].hourly[3].winddir16Point;
    let nextnextday3windspeed: string = data.weather[2].hourly[3].windspeedKmph;
    let nextnextday3weatherdesc: string =
        data.weather[2].hourly[3].weatherDesc[0].value;

    // 12pm
    let nextnextday4temp: string = data.weather[2].hourly[4].tempC;
    let nextnextday4winddir: string = data.weather[2].hourly[4].winddir16Point;
    let nextnextday4windspeed: string = data.weather[2].hourly[4].windspeedKmph;
    let nextnextday4weatherdesc: string =
        data.weather[2].hourly[4].weatherDesc[0].value;

    // 3pm
    let nextnextday5temp: string = data.weather[2].hourly[5].tempC;
    let nextnextday5winddir: string = data.weather[2].hourly[5].winddir16Point;
    let nextnextday5windspeed: string = data.weather[2].hourly[5].windspeedKmph;
    let nextnextday5weatherdesc: string =
        data.weather[2].hourly[5].weatherDesc[0].value;

    // 6pm
    let nextnextday6temp: string = data.weather[2].hourly[6].tempC;
    let nextnextday6winddir: string = data.weather[2].hourly[6].winddir16Point;
    let nextnextday6windspeed: string = data.weather[2].hourly[6].windspeedKmph;
    let nextnextday6weatherdesc: string =
        data.weather[2].hourly[6].weatherDesc[0].value;

    // 9pm
    let nextnextday7temp: string = data.weather[2].hourly[7].tempC;
    let nextnextday7winddir: string = data.weather[2].hourly[7].winddir16Point;
    let nextnextday7windspeed: string = data.weather[2].hourly[7].windspeedKmph;
    let nextnextday7weatherdesc: string =
        data.weather[2].hourly[7].weatherDesc[0].value;

    //----------------------- later addition

    let today0feelsc: string = data.weather[0].hourly[0].FeelsLikeC;
    let today1feelsc: string = data.weather[0].hourly[1].FeelsLikeC;
    let today2feelsc: string = data.weather[0].hourly[2].FeelsLikeC;
    let today3feelsc: string = data.weather[0].hourly[3].FeelsLikeC;
    let today4feelsc: string = data.weather[0].hourly[4].FeelsLikeC;
    let today5feelsc: string = data.weather[0].hourly[5].FeelsLikeC;
    let today6feelsc: string = data.weather[0].hourly[6].FeelsLikeC;
    let today7feelsc: string = data.weather[0].hourly[7].FeelsLikeC;

    let nextday0feelsc: string = data.weather[1].hourly[0].FeelsLikeC;
    let nextday1feelsc: string = data.weather[1].hourly[1].FeelsLikeC;
    let nextday2feelsc: string = data.weather[1].hourly[2].FeelsLikeC;
    let nextday3feelsc: string = data.weather[1].hourly[3].FeelsLikeC;
    let nextday4feelsc: string = data.weather[1].hourly[4].FeelsLikeC;
    let nextday5feelsc: string = data.weather[1].hourly[5].FeelsLikeC;
    let nextday6feelsc: string = data.weather[1].hourly[6].FeelsLikeC;
    let nextday7feelsc: string = data.weather[1].hourly[7].FeelsLikeC;

    let nextnextday0feelsc: string = data.weather[2].hourly[0].FeelsLikeC;
    let nextnextday1feelsc: string = data.weather[2].hourly[1].FeelsLikeC;
    let nextnextday2feelsc: string = data.weather[2].hourly[2].FeelsLikeC;
    let nextnextday3feelsc: string = data.weather[2].hourly[3].FeelsLikeC;
    let nextnextday4feelsc: string = data.weather[2].hourly[4].FeelsLikeC;
    let nextnextday5feelsc: string = data.weather[2].hourly[5].FeelsLikeC;
    let nextnextday6feelsc: string = data.weather[2].hourly[6].FeelsLikeC;
    let nextnextday7feelsc: string = data.weather[2].hourly[7].FeelsLikeC;

    // ---------------
    function getCurrentDate(): string {
        const months: string[] = [
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
        const days: string[] = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        const now: Date = new Date();
        const day: string = days[now.getDay()];
        const date: number = now.getDate();
        const month: string = months[now.getMonth()];
        const year: number = now.getFullYear();
        let hours: number = now.getHours();
        const minutes: number = now.getMinutes();

        const formattedHours: string =
            hours < 10 ? `0${hours}` : hours.toString();
        const formattedMinutes: string =
            minutes < 10 ? `0${minutes}` : minutes.toString();

        const formattedDate: string = `${day}, ${date} ${month} ${year}, ${formattedHours}:${formattedMinutes}`;

        return formattedDate;
    }

    document.getElementById("loc").innerHTML = loc + ", " + region + "<br/>";
    document.getElementById("date").innerHTML = getCurrentDate();
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
<p>0 AM: <br/> ${today0temp}(${today0feelsc})°C, Wind Speed - ${today0windspeed} km/h, ${today0winddir} <br/> Condition - ${today0weatherdesc}</p>
<p>3 AM: <br/> ${today1temp}(${today1feelsc})°C, Wind Speed - ${today1windspeed} km/h, ${today1winddir} <br/> Condition - ${today1weatherdesc}</p>
<p>6 AM: <br/> ${today2temp}(${today2feelsc})°C, Wind Speed - ${today2windspeed} km/h, ${today2winddir} <br/> Condition - ${today2weatherdesc}</p>
<p>9 AM: <br/> ${today3temp}(${today3feelsc})°C, Wind Speed - ${today3windspeed} km/h, ${today3winddir} <br/> Condition - ${today3weatherdesc}</p>
<p>12 PM: <br/> ${today4temp}(${today4feelsc})°C, Wind Speed - ${today4windspeed} km/h, ${today4winddir} <br/> Condition - ${today4weatherdesc}</p>
<p>3 PM: <br/> ${today5temp}(${today5feelsc})°C, Wind Speed - ${today5windspeed} km/h, ${today5winddir} <br/> Condition - ${today5weatherdesc}</p>
<p>6 PM: <br/> ${today6temp}(${today6feelsc})°C, Wind Speed - ${today6windspeed} km/h, ${today6winddir} <br/> Condition - ${today6weatherdesc}</p>
<p>9 PM: <br/> ${today7temp}(${today7feelsc})°C, Wind Speed - ${today7windspeed} km/h, ${today7winddir} <br/> Condition - ${today7weatherdesc}</p>
`;

    // For Tomorrow
    document.getElementById("nextday").innerHTML = `
<p>0 AM: <br/> ${nextday0temp}(${nextday0feelsc})°C, Wind Speed - ${nextday0windspeed} km/h, ${nextday0winddir} <br/> Condition - ${nextday0weatherdesc}</p>
<p>3 AM: <br/> ${nextday1temp}(${nextday1feelsc})°C, Wind Speed - ${nextday1windspeed} km/h, ${nextday1winddir} <br/> Condition - ${nextday1weatherdesc}</p>
<p>6 AM: <br/> ${nextday2temp}(${nextday2feelsc})°C, Wind Speed - ${nextday2windspeed} km/h, ${nextday2winddir} <br/> Condition - ${nextday2weatherdesc}</p>
<p>9 AM: <br/> ${nextday3temp}(${nextday3feelsc})°C, Wind Speed - ${nextday3windspeed} km/h, ${nextday3winddir} <br/> Condition - ${nextday3weatherdesc}</p>
<p>12 PM: <br/> ${nextday4temp}(${nextday4feelsc})°C, Wind Speed - ${nextday4windspeed} km/h, ${nextday4winddir} <br/> Condition - ${nextday4weatherdesc}</p>
<p>3 PM: <br/> ${nextday5temp}(${nextday5feelsc})°C, Wind Speed - ${nextday5windspeed} km/h, ${nextday5winddir} <br/> Condition - ${nextday5weatherdesc}</p>
<p>6 PM: <br/> ${nextday6temp}(${nextday6feelsc})°C, Wind Speed - ${nextday6windspeed} km/h, ${nextday6winddir} <br/> Condition - ${nextday6weatherdesc}</p>
<p>9 PM: <br/> ${nextday7temp}(${nextday7feelsc})°C, Wind Speed - ${nextday7windspeed} km/h, ${nextday7winddir} <br/> Condition - ${nextday7weatherdesc}</p>
`;

    // For Overmorrow
    document.getElementById("nextnextday").innerHTML = `
<p>0 AM: <br/> ${nextnextday0temp}(${nextnextday0feelsc})°C, Wind Speed - ${nextnextday0windspeed} km/h, ${nextnextday0winddir} <br/> Condition - ${nextnextday0weatherdesc}</p>
<p>3 AM: <br/> ${nextnextday1temp}(${nextnextday1feelsc})°C, Wind Speed - ${nextnextday1windspeed} km/h, ${nextnextday1winddir} <br/> Condition - ${nextnextday1weatherdesc}</p>
<p>6 AM: <br/> ${nextnextday2temp}(${nextnextday2feelsc})°C, Wind Speed - ${nextnextday2windspeed} km/h, ${nextnextday2winddir} <br/> Condition - ${nextnextday2weatherdesc}</p>
<p>9 AM: <br/> ${nextnextday3temp}(${nextnextday3feelsc})°C, Wind Speed - ${nextnextday3windspeed} km/h, ${nextnextday3winddir} <br/> Condition - ${nextnextday3weatherdesc}</p>
<p>12 PM: <br/> ${nextnextday4temp}(${nextnextday4feelsc})°C, Wind Speed - ${nextnextday4windspeed} km/h, ${nextnextday4winddir} <br/> Condition - ${nextnextday4weatherdesc}</p>
<p>3 PM: <br/> ${nextnextday5temp}(${nextnextday5feelsc})°C, Wind Speed - ${nextnextday5windspeed} km/h, ${nextnextday5winddir} <br/> Condition - ${nextnextday5weatherdesc}</p>
<p>6 PM: <br/> ${nextnextday6temp}(${nextnextday6feelsc})°C, Wind Speed - ${nextnextday6windspeed} km/h, ${nextnextday6winddir} <br/> Condition - ${nextnextday6weatherdesc}</p>
<p>9 PM: <br/> ${nextnextday7temp}(${nextnextday7feelsc})°C, Wind Speed - ${nextnextday7windspeed} km/h, ${nextnextday7winddir} <br/> Condition - ${nextnextday7weatherdesc}</p>
`;

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
}
getWeather();
