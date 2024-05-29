import httpclient, json, jsdom

var city = ""
var formattedHours = ""

proc getWeather() {.async.} =
let api_url = "https://wttr.in/" & city & "?format=j1"
echo "API URL: ", api_url

let response = await newHttpClient().get(api_url)
let data = await response.body.readJson

let loc = data["nearest_area"][0]["areaName"][0]["value"].getStr
let region = data["nearest_area"][0]["region"][0]["value"].getStr

let temp = data["current_condition"][0]["temp_C"].getInt
let maxtemp = data["weather"][0]["maxtempC"].getInt
let mintemp = data["weather"][0]["mintempC"].getInt

let humidity = data["current_condition"][0]["humidity"].getInt
let feel = data["current_condition"][0]["FeelsLikeC"].getInt
let time = data["current_condition"][0]["localObsDateTime"].getStr
let desc = data["current_condition"][0]["weatherDesc"][0]["value"].getStr
let wCode = data["current_condition"][0]["weatherCode"].getInt
let wind = data["current_condition"][0]["windspeedKmph"].getInt
let dir = data["current_condition"][0]["winddir16Point"].getStr
let uv = data["current_condition"][0]["uvIndex"].getInt

let nextdaymax = data["weather"][1]["maxtempC"].getInt
let nextdaymin = data["weather"][1]["mintempC"].getInt

let nextnextdaymax = data["weather"][2]["maxtempC"].getInt
let nextnextdaymin = data["weather"][2]["mintempC"].getInt

# ------------------------- today

# 0am
let today0temp = data.weather[0].hourly[0].tempC
let today0winddir = data.weather[0].hourly[0].winddir16Point
let today0windspeed = data.weather[0].hourly[0].windspeedKmph
let today0weatherdesc = data.weather[0].hourly[0].weatherDesc[0].value

# 3am
let today1temp = data.weather[0].hourly[1].tempC
let today1winddir = data.weather[0].hourly[1].winddir16Point
let today1windspeed = data.weather[0].hourly[1].windspeedKmph
let today1weatherdesc = data.weather[0].hourly[1].weatherDesc[0].value

# 6am
let today2temp = data.weather[0].hourly[2].tempC
let today2winddir = data.weather[0].hourly[2].winddir16Point
let today2windspeed = data.weather[0].hourly[2].windspeedKmph
let today2weatherdesc = data.weather[0].hourly[2].weatherDesc[0].value

# 9am
let today3temp = data.weather[0].hourly[3].tempC
let today3winddir = data.weather[0].hourly[3].winddir16Point
let today3windspeed = data.weather[0].hourly[3].windspeedKmph
let today3weatherdesc = data.weather[0].hourly[3].weatherDesc[0].value

# 12pm
let today4temp = data.weather[0].hourly[4].tempC
let today4winddir = data.weather[0].hourly[4].winddir16Point
let today4windspeed = data.weather[0].hourly[4].windspeedKmph
let today4weatherdesc = data.weather[0].hourly[4].weatherDesc[0].value

# 3pm
let today5temp = data.weather[0].hourly[5].tempC
let today5winddir = data.weather[0].hourly[5].winddir16Point
let today5windspeed = data.weather[0].hourly[5].windspeedKmph
let today5weatherdesc = data.weather[0].hourly[5].weatherDesc[0].value

# 6pm
let today6temp = data.weather[0].hourly[6].tempC
let today6winddir = data.weather[0].hourly[6].winddir16Point
let today6windspeed = data.weather[0].hourly[6].windspeedKmph
let today6weatherdesc = data.weather[0].hourly[6].weatherDesc[0].value

# 9pm
let today7temp = data.weather[0].hourly[7].tempC
let today7winddir = data.weather[0].hourly[7].winddir16Point
let today7windspeed = data.weather[0].hourly[7].windspeedKmph
let today7weatherdesc = data.weather[0].hourly[7].weatherDesc[0].value

# ----------------------- nextday
# 0am
let nextday0temp = data.weather[1].hourly[0].tempC
let nextday0winddir = data.weather[1].hourly[0].winddir16Point
let nextday0windspeed = data.weather[1].hourly[0].windspeedKmph
let nextday0weatherdesc = data.weather[1].hourly[0].weatherDesc[0].value

# 3am
let nextday1temp = data.weather[1].hourly[1].tempC
let nextday1winddir = data.weather[1].hourly[1].winddir16Point
let nextday1windspeed = data.weather[1].hourly[1].windspeedKmph
let nextday1weatherdesc = data.weather[1].hourly[1].weatherDesc[0].value

# 6am
let nextday2temp = data.weather[1].hourly[2].tempC
let nextday2winddir = data.weather[1].hourly[2].winddir16Point
let nextday2windspeed = data.weather[1].hourly[2].windspeedKmph
let nextday2weatherdesc = data.weather[1].hourly[2].weatherDesc[0].value

# 9am
let nextday3temp = data.weather[1].hourly[3].tempC
let nextday3winddir = data.weather[1].hourly[3].winddir16Point
let nextday3windspeed = data.weather[1].hourly[3].windspeedKmph
let nextday3weatherdesc = data.weather[1].hourly[3].weatherDesc[0].value

# 12pm
let nextday4temp = data.weather[1].hourly[4].tempC
let nextday4winddir = data.weather[1].hourly[4].winddir16Point
let nextday4windspeed = data.weather[1].hourly[4].windspeedKmph
let nextday4weatherdesc = data.weather[1].hourly[4].weatherDesc[0].value

# 3pm
let nextday5temp = data.weather[1].hourly[5].tempC
let nextday5winddir = data.weather[1].hourly[5].winddir16Point
let nextday5windspeed = data.weather[1].hourly[5].windspeedKmph
let nextday5weatherdesc = data.weather[1].hourly[5].weatherDesc[0].value

# 6pm
let nextday6temp = data.weather[1].hourly[6].tempC
let nextday6winddir = data.weather[1].hourly[6].winddir16Point
let nextday6windspeed = data.weather[1].hourly[6].windspeedKmph
let nextday6weatherdesc = data.weather[1].hourly[6].weatherDesc[0].value

# 9pm
let nextday7temp = data.weather[1].hourly[7].tempC
let nextday7winddir = data.weather[1].hourly[7].winddir16Point
let nextday7windspeed = data.weather[1].hourly[7].windspeedKmph
let nextday7weatherdesc = data.weather[1].hourly[7].weatherDesc[0].value

# ----------------------- nextnextday

# 0am
let nextnextday0temp = data.weather[2].hourly[0].tempC
let nextnextday0winddir = data.weather[2].hourly[0].winddir16Point
let nextnextday0windspeed = data.weather[2].hourly[0].windspeedKmph
let nextnextday0weatherdesc = data.weather[2].hourly[0].weatherDesc[0].value

# 3am
let nextnextday1temp = data.weather[2].hourly[1].tempC
let nextnextday1winddir = data.weather[2].hourly[1].winddir16Point
let nextnextday1windspeed = data.weather[2].hourly[1].windspeedKmph
let nextnextday1weatherdesc = data.weather[2].hourly[1].weatherDesc[0].value

# 6am
let nextnextday2temp = data.weather[2].hourly[2].tempC
let nextnextday2winddir = data.weather[2].hourly[2].winddir16Point
let nextnextday2windspeed = data.weather[2].hourly[2].windspeedKmph
let nextnextday2weatherdesc = data.weather[2].hourly[2].weatherDesc[0].value

# 9am
let nextnextday3temp = data.weather[2].hourly[3].tempC
let nextnextday3winddir = data.weather[2].hourly[3].winddir16Point
let nextnextday3windspeed = data.weather[2].hourly[3].windspeedKmph
let nextnextday3weatherdesc = data.weather[2].hourly[3].weatherDesc[0].value

# 12pm
let nextnextday4temp = data.weather[2].hourly[4].tempC
let nextnextday4winddir = data.weather[2].hourly[4].winddir16Point
let nextnextday4windspeed = data.weather[2].hourly[4].windspeedKmph
let nextnextday4weatherdesc = data.weather[2].hourly[4].weatherDesc[0].value

# 3pm
let nextnextday5temp = data.weather[2].hourly[5].tempC
let nextnextday5winddir = data.weather[2].hourly[5].winddir16Point
let nextnextday5windspeed = data.weather[2].hourly[5].windspeedKmph
let nextnextday5weatherdesc = data.weather[2].hourly[5].weatherDesc[0].value

# 6pm
let nextnextday6temp = data.weather[2].hourly[6].tempC
let nextnextday6winddir = data.weather[2].hourly[6].winddir16Point
let nextnextday6windspeed = data.weather[2].hourly[6].windspeedKmph
let nextnextday6weatherdesc = data.weather[2].hourly[6].weatherDesc[0].value

# 9pm
let nextnextday7temp = data.weather[2].hourly[7].tempC
let nextnextday7winddir = data.weather[2].hourly[7].winddir16Point
let nextnextday7windspeed = data.weather[2].hourly[7].windspeedKmph
let nextnextday7weatherdesc = data.weather[2].hourly[7].weatherDesc[0].value

#----------------------- later addition

let today0feelsc = data.weather[0].hourly[0].FeelsLikeC
let today1feelsc = data.weather[0].hourly[1].FeelsLikeC
let today2feelsc = data.weather[0].hourly[2].FeelsLikeC
let today3feelsc = data.weather[0].hourly[3].FeelsLikeC
let today4feelsc = data.weather[0].hourly[4].FeelsLikeC
let today5feelsc = data.weather[0].hourly[5].FeelsLikeC
let today6feelsc = data.weather[0].hourly[6].FeelsLikeC
let today7feelsc = data.weather[0].hourly[7].FeelsLikeC

let nextday0feelsc = data.weather[1].hourly[0].FeelsLikeC
let nextday1feelsc = data.weather[1].hourly[1].FeelsLikeC
let nextday2feelsc = data.weather[1].hourly[2].FeelsLikeC
let nextday3feelsc = data.weather[1].hourly[3].FeelsLikeC
let nextday4feelsc = data.weather[1].hourly[4].FeelsLikeC
let nextday5feelsc = data.weather[1].hourly[5].FeelsLikeC
let nextday6feelsc = data.weather[1].hourly[6].FeelsLikeC
let nextday7feelsc = data.weather[1].hourly[7].FeelsLikeC

let nextnextday0feelsc = data.weather[2].hourly[0].FeelsLikeC
let nextnextday1feelsc = data.weather[2].hourly[1].FeelsLikeC
let nextnextday2feelsc = data.weather[2].hourly[2].FeelsLikeC
let nextnextday3feelsc = data.weather[2].hourly[3].FeelsLikeC
let nextnextday4feelsc = data.weather[2].hourly[4].FeelsLikeC
let nextnextday5feelsc = data.weather[2].hourly[5].FeelsLikeC
let nextnextday6feelsc = data.weather[2].hourly[6].FeelsLikeC
let nextnextday7feelsc = data.weather[2].hourly[7].FeelsLikeC

# ---------------
# find the nim way
proc getCurrentDate(): string =
const months = @["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = @["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let now = new Date()
let day = days[now.getDay()]
let date = now.getDate()
let month = months[now.getMonth()]
let year = now.getFullYear()
var hours = now.getHours()
let minutes = now.getMinutes()

let formattedHours = if hours < 10: "0" & $hours else : $hours
let formattedMinutes = if minutes < 10: "0" & $minutes else : $minutes

result = $day & ", " & $date & " " & $month & " " & $year & ", " & $formattedHours & ":" & $formattedMinutes


var locElem = document.getElementById("loc")
locElem.innerHTML = loc & ", " & region & "<br/>"

var dateElem = document.getElementById("date")
dateElem.innerHTML = getCurrentDate()

var descElem = document.getElementById("desc")
descElem.innerHTML = desc

var tempElem = document.getElementById("temp")
tempElem.innerHTML = temp & "&deg;C"

var minmaxElem = document.getElementById("minmax")
minmaxElem.innerHTML = maxtemp & "&deg;C" & "<hr/>" & mintemp & "&deg;C"

var detailsNowElem = document.getElementById("detailsnow")
detailsNowElem.innerHTML = "Feels like: " & feel & "&deg;C<br/>Ultraviolet Index: " & uv & "<br/>Humidity: " & humidity & "%<br/>Wind: " & wind & "kmph from " & dir

var tomorrowElem = document.getElementById("tomorrow")
tomorrowElem.innerHTML = "Tomorrow" & "<hr/>" & "Max: " & nextdaymax & "&deg;C" & "<hr/>" & "Min: " & nextdaymin

var overmorrowElem = document.getElementById("overmorrow")
overmorrowElem.innerHTML = "Overmorrow" & "<hr/>" & "Max: " & nextnextdaymax & "&deg;C" & "<hr/>" & "Min: " & nextnextdaymin

# For Today
var todayElem = document.getElementById("today")
todayElem.innerHTML = """
<p>0 AM: <br/> $(today0temp)($(today0feelsc))°C, Wind Speed - $(today0windspeed) km/h, $(today0winddir) <br/> Condition - $(today0weatherdesc)</p>
<p>3 AM: <br/> $(today1temp)($(today1feelsc))°C, Wind Speed - $(today1windspeed) km/h, $(today1winddir) <br/> Condition - $(today1weatherdesc)</p>
<p>6 AM: <br/> $(today2temp)($(today2feelsc))°C, Wind Speed - $(today2windspeed) km/h, $(today2winddir) <br/> Condition - $(today2weatherdesc)</p>
<p>9 AM: <br/> $(today3temp)($(today3feelsc))°C, Wind Speed - $(today3windspeed) km/h, $(today3winddir) <br/> Condition - $(today3weatherdesc)</p>
<p>12 PM: <br/> $(today4temp)($(today4feelsc))°C, Wind Speed - $(today4windspeed) km/h, $(today4winddir) <br/> Condition - $(today4weatherdesc)</p>
<p>3 PM: <br/> $(today5temp)($(today5feelsc))°C, Wind Speed - $(today5windspeed) km/h, $(today5winddir) <br/> Condition - $(today5weatherdesc)</p>
<p>6 PM: <br/> $(today6temp)($(today6feelsc))°C, Wind Speed - $(today6windspeed) km/h, $(today6winddir) <br/> Condition - $(today6weatherdesc)</p>
<p>9 PM: <br/> $(today7temp)($(today7feelsc))°C, Wind Speed - $(today7windspeed) km/h, $(today7winddir) <br/> Condition - $(today7weatherdesc)</p>
"""
# For Tomorrow
var nextdayElem = document.getElementById("nextday")
nextdayElem.innerHTML = """
<p>0 AM: <br/> $(nextday0temp)($(nextday0feelsc))°C, Wind Speed - $(nextday0windspeed) km/h, $(nextday0winddir) <br/> Condition - $(nextday0weatherdesc)</p>
<p>3 AM: <br/> $(nextday1temp)($(nextday1feelsc))°C, Wind Speed - $(nextday1windspeed) km/h, $(nextday1winddir) <br/> Condition - $(nextday1weatherdesc)</p>
<p>6 AM: <br/> $(nextday2temp)($(nextday2feelsc))°C, Wind Speed - $(nextday2windspeed) km/h, $(nextday2winddir) <br/> Condition - $(nextday2weatherdesc)</p>
<p>9 AM: <br/> $(nextday3temp)($(nextday3feelsc))°C, Wind Speed - $(nextday3windspeed) km/h, $(nextday3winddir) <br/> Condition - $(nextday3weatherdesc)</p>
<p>12 PM: <br/> $(nextday4temp)($(nextday4feelsc))°C, Wind Speed - $(nextday4windspeed) km/h, $(nextday4winddir) <br/> Condition - $(nextday4weatherdesc)</p>
<p>3 PM: <br/> $(nextday5temp)($(nextday5feelsc))°C, Wind Speed - $(nextday5windspeed) km/h, $(nextday5winddir) <br/> Condition - $(nextday5weatherdesc)</p>
<p>6 PM: <br/> $(nextday6temp)($(nextday6feelsc))°C, Wind Speed - $(nextday6windspeed) km/h, $(nextday6winddir) <br/> Condition - $(nextday6weatherdesc)</p>
<p>9 PM: <br/> $(nextday7temp)($(nextday7feelsc))°C, Wind Speed - $(nextday7windspeed) km/h, $(nextday7winddir) <br/> Condition - $(nextday7weatherdesc)</p>
"""

# For Overmorrow
var nextnextdayElem = document.getElementById("nextnextday")
nextnextdayElem.innerHTML = """
<p>0 AM: <br/> $(nextnextday0temp)($(nextnextday0feelsc))°C, Wind Speed - $(nextnextday0windspeed) km/h, $(nextnextday0winddir) <br/> Condition - $(nextnextday0weatherdesc)</p>
<p>3 AM: <br/> $(nextnextday1temp)($(nextnextday1feelsc))°C, Wind Speed - $(nextnextday1windspeed) km/h, $(nextnextday1winddir) <br/> Condition - $(nextnextday1weatherdesc)</p>
<p>6 AM: <br/> $(nextnextday2temp)($(nextnextday2feelsc))°C, Wind Speed - $(nextnextday2windspeed) km/h, $(nextnextday2winddir) <br/> Condition - $(nextnextday2weatherdesc)</p>
<p>9 AM: <br/> $(nextnextday3temp)($(nextnextday3feelsc))°C, Wind Speed - $(nextnextday3windspeed) km/h, $(nextnextday3winddir) <br/> Condition - $(nextnextday3weatherdesc)</p>
<p>12 PM: <br/> $(nextnextday4temp)($(nextnextday4feelsc))°C, Wind Speed - $(nextnextday4windspeed) km/h, $(nextnextday4winddir) <br/> Condition - $(nextnextday4weatherdesc)</p>
<p>3 PM: <br/> $(nextnextday5temp)($(nextnextday5feelsc))°C, Wind Speed - $(nextnextday5windspeed) km/h, $(nextnextday5winddir) <br/> Condition - $(nextnextday5weatherdesc)</p>
<p>6 PM: <br/> $(nextnextday6temp)($(nextnextday6feelsc))°C, Wind Speed - $(nextnextday6windspeed) km/h, $(nextnextday6winddir) <br/> Condition - $(nextnextday6weatherdesc)</p>
<p>9 PM: <br/> $(nextnextday7temp)($(nextnextday7feelsc))°C, Wind Speed - $(nextnextday7windspeed) km/h, $(nextnextday7winddir) <br/> Condition - $(nextnextday7weatherdesc)</p>
"""

if 4 < formattedHours < 7:
document.documentElement.style.setProperty(
	"--bg-image",
	"linear-gradient(to top, #00223E 0%, #FFA17F 100%)"
)

if 18 < formattedHours < 20:
document.documentElement.style.setProperty(
	"--bg-image",
	"linear-gradient(to top, #0B486B 0%, #F56217 100%)"
)

if 20 < formattedHours < 23:
document.documentElement.style.setProperty(
	"--bg-image",
	"linear-gradient(to top, saddlebrown 0%, #19547b 100%)"
)

if temp > 40:
document.documentElement.style.setProperty(
	"--bg-image",
	"linear-gradient(to top, #C02425 0%, #F0CB35 100%)"
)


#[
	proc getWeather(city: string): Future[JsonNode] {.async.} =
    let api_url = "https://wttr.in/" & city & "?format=j1"
    echo "API URL: ", api_url

    try:
        let response = await newHttpClient().get(api_url)
        let data = await response.body.readJson
        return data
    except:
        echo "Error fetching weather data"
        # Handle the error appropriately, e.g., return a default value or raise an exception
]#