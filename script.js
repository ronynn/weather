let currentCity = localStorage.getItem("lastCity") || ""
let lastFetchedData = null
let activeCharts = []
let resizeTimeout = null

document.addEventListener("DOMContentLoaded", function()
{
  setupTheme()
  setupSearch()
  setupTabs()
  setupFavorites()
  setupNetworkListener()
  initialLoad()
  setupResizeHandler()
})

function setupTheme()
{
  let savedTheme = localStorage.getItem("theme") || "vibrant"
  document.documentElement.setAttribute("data-theme", savedTheme)
  let themeSelect = document.getElementById("themeSelect")
  themeSelect.value = savedTheme
  themeSelect.addEventListener("change", function(e)
  {
    let theme = e.target.value
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  })
}

function setupSearch()
{
  let input = document.getElementById("cityInput")
  let clearBtn = document.getElementById("clearBtn")
  
  input.addEventListener("keypress", function(e)
  {
    if (e.key === "Enter")
    {
      e.preventDefault()
      let val = input.value.trim()
      if (val)
      {
        currentCity = val
        fetchWeather(currentCity)
      }
    }
  })

  clearBtn.addEventListener("click", function()
  {
    input.value = ""
    input.focus()
  })
}

function setupTabs()
{
  let buttons = document.querySelectorAll(".tab-btn")
  buttons.forEach(btn =>
  {
    btn.addEventListener("click", function()
    {
      buttons.forEach(b => b.classList.remove("active"))
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"))
      
      btn.classList.add("active")
      let targetId = btn.getAttribute("data-tab")
      document.getElementById(targetId).classList.add("active")
      
      if (targetId === "graphsTab" && lastFetchedData)
      {
        renderCharts(lastFetchedData)
      }
    })
  })
}

function setupFavorites()
{
  let saveBtn = document.getElementById("saveLocBtn")
  saveBtn.addEventListener("click", function()
  {
    if (!currentCity) return
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (!favs.includes(currentCity))
    {
      favs.push(currentCity)
      localStorage.setItem("favorites", JSON.stringify(favs))
      renderFavorites()
      showToast("Location saved!")
    }
    else
    {
      showToast("Already in favorites.")
    }
  })
  renderFavorites()
}

function renderFavorites()
{
  let container = document.getElementById("favoritesList")
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]")
  
  if (favs.length === 0)
  {
    container.innerHTML = "<span style='font-size:0.9rem; opacity:0.7;'>No saved locations yet.</span>"
    return
  }

  let html = ""
  favs.forEach(fav =>
  {
    html += `<div class="fav-pill"><span onclick="selectFavorite('${fav}')">${fav}</span><button onclick="removeFavorite(event, '${fav}')">&times;</button></div>`
  })
  container.innerHTML = html
}

function selectFavorite(fav)
{
  currentCity = fav
  document.getElementById("cityInput").value = fav
  fetchWeather(fav)
}

function removeFavorite(event, fav)
{
  event.stopPropagation()
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]")
  let updated = favs.filter(item => item !== fav)
  localStorage.setItem("favorites", JSON.stringify(updated))
  renderFavorites()
}

function setupNetworkListener()
{
  window.addEventListener("online", updateNetworkStatus)
  window.addEventListener("offline", updateNetworkStatus)
  updateNetworkStatus()
}

function updateNetworkStatus()
{
  let banner = document.getElementById("offlineBanner")
  if (!navigator.onLine)
  {
    banner.classList.remove("hidden")
  }
  else
  {
    banner.classList.add("hidden")
  }
}

function setupResizeHandler()
{
  window.addEventListener("resize", function()
  {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function()
    {
      let activeTab = document.querySelector(".tab-pane.active").id
      if (activeTab === "graphsTab" && lastFetchedData)
      {
        renderCharts(lastFetchedData)
      }
    }, 250)
  })
}

function initialLoad()
{
  if (currentCity)
  {
    document.getElementById("cityInput").value = currentCity
    fetchWeather(currentCity)
  }
  else if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(
      position =>
      {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        currentCity = `${lat},${lon}`
        fetchWeather(currentCity)
      },
      error =>
      {
        currentCity = "London"
        fetchWeather(currentCity)
      }
    )
  }
  else
  {
    currentCity = "London"
    fetchWeather(currentCity)
  }
}

async function fetchWeather(query)
{
  let url = `https://wttr.in/${encodeURIComponent(query)}?format=j1`
  showToast("Fetching weather...")
  try
  {
    let res = await fetch(url)
    if (!res.ok) throw new Error("Failed to fetch")
    let data = await res.json()
    lastFetchedData = data
    localStorage.setItem("lastCity", query)
    displayWeatherData(data)
    showToast("Weather updated!")
    
    let activeTab = document.querySelector(".tab-pane.active").id
    if (activeTab === "graphsTab")
    {
      renderCharts(data)
    }
  }
  catch (err)
  {
    console.error(err)
    showToast("Error fetching weather data.")
    if (lastFetchedData)
    {
      displayWeatherData(lastFetchedData)
    }
  }
}

function displayWeatherData(data)
{
  let area = data.nearest_area[0].areaName[0].value
  let region = data.nearest_area[0].region[0].value
  
  let current = data.current_condition[0]
  let weatherToday = data.weather[0]
  let weatherTomorrow = data.weather[1]
  let weatherOvermorrow = data.weather[2]

  document.getElementById("locName").textContent = `${area}, ${region}`
  document.getElementById("currentDate").textContent = formatDate(weatherToday.date)
  document.getElementById("currentTemp").textContent = `${current.temp_C}°C`
  document.getElementById("weatherDesc").textContent = current.weatherDesc[0].value
  document.getElementById("highLow").textContent = `${weatherToday.maxtempC}°C / ${weatherToday.mintempC}°C`
  document.getElementById("feelsLike").textContent = `${current.FeelsLikeC}°C`
  document.getElementById("humidity").textContent = `${current.humidity}%`
  document.getElementById("windInfo").textContent = `${current.windspeedKmph} km/h ${current.winddir16Point}`
  document.getElementById("uvIndex").textContent = current.uvIndex
  document.getElementById("visibility").textContent = `${current.visibility} km`
  document.getElementById("pressure").textContent = `${current.pressure} mb`
  
  let astronomy = weatherToday.astronomy[0]
  document.getElementById("sunTimes").innerHTML = `Sunrise: ${astronomy.sunrise}<br>Sunset: ${astronomy.sunset}`
  document.getElementById("moonInfo").innerHTML = `Moon Phase: ${astronomy.moon_phase}<br>Illumination: ${astronomy.moon_illumination}%`

  document.getElementById("tomorrowInfo").innerHTML = `Max: ${weatherTomorrow.maxtempC}°C / Min: ${weatherTomorrow.mintempC}°C<br>${weatherTomorrow.hourly[4].weatherDesc[0].value}`
  document.getElementById("overmorrowInfo").innerHTML = `Max: ${weatherOvermorrow.maxtempC}°C / Min: ${weatherOvermorrow.mintempC}°C<br>${weatherOvermorrow.hourly[4].weatherDesc[0].value}`

  renderWeatherTable("todayTableContainer", weatherToday, "Today")
  renderWeatherTable("tomorrowTableContainer", weatherTomorrow, "Tomorrow")
  renderWeatherTable("overmorrowTableContainer", weatherOvermorrow, "Overmorrow")
}

function renderWeatherTable(containerId, dayData, title)
{
  let container = document.getElementById(containerId)
  let currentHourIndex = getCurrentHourIndex(title === "Today")

  let rowsHtml = ""
  dayData.hourly.forEach((hour, idx) =>
  {
    let timeLabel = formatHourLabel(hour.time)
    let isHighlight = (title === "Today" && idx === currentHourIndex)
    let rowClass = isHighlight ? "highlight-row" : ""

    rowsHtml += `
      <tr class="${rowClass}">
        <td>${timeLabel}</td>
        <td>${hour.tempC}°C</td>
        <td>${hour.FeelsLikeC}°C</td>
        <td>${hour.windspeedKmph} km/h ${hour.winddir16Point}</td>
        <td>${hour.weatherDesc[0].value}</td>
        <td>${hour.chanceofrain}%</td>
      </tr>
    `
  })

  let html = `
    <div style="margin-bottom: 8px; font-weight: 600;">${title} (${formatDate(dayData.date)})</div>
    <div style="overflow-x: auto;">
      <table class="weather-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Temp</th>
            <th>Feels</th>
            <th>Wind</th>
            <th>Condition</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `
  container.innerHTML = html
}

function formatHourLabel(timeStr)
{
  let hourVal = parseInt(timeStr) / 100
  if (isNaN(hourVal)) return timeStr
  if (hourVal === 0) return "12 AM"
  if (hourVal < 12) return `${hourVal} AM`
  if (hourVal === 12) return "12 PM"
  return `${hourVal - 12} PM`
}

function getCurrentHourIndex(isToday)
{
  if (!isToday) return -1
  let now = new Date()
  let hour = now.getHours()
  return Math.floor(hour / 3)
}

function formatDate(dateStr)
{
  if (!dateStr) return ""
  let parts = dateStr.split("-")
  if (parts.length === 3)
  {
    let d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]))
    return d.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
  }
  let d = new Date(dateStr)
  if (isNaN(d)) return dateStr
  return d.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

function showToast(msg)
{
  let toast = document.getElementById("toast")
  toast.textContent = msg
  toast.classList.remove("hidden")
  setTimeout(() =>
  {
    toast.classList.add("hidden")
  }, 2500)
}

function renderCharts(data)
{
  activeCharts.forEach(chart => chart.destroy())
  activeCharts = []

  let labels = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"]
  let xValues = [0, 1, 2, 3, 4, 5, 6, 7]

  createSingleChart("chartToday", labels, xValues, data.weather[0])
  createSingleChart("chartTomorrow", labels, xValues, data.weather[1])
  createSingleChart("chartOvermorrow", labels, xValues, data.weather[2])
}

function createSingleChart(targetId, labels, xValues, dayData)
{
  let temps = dayData.hourly.map(h => parseFloat(h.tempC))
  let feels = dayData.hourly.map(h => parseFloat(h.FeelsLikeC))
  let winds = dayData.hourly.map(h => parseFloat(h.windspeedKmph))
  let rain = dayData.hourly.map(h => parseFloat(h.chanceofrain))

  let chartData = [
    xValues,
    temps,
    feels,
    winds,
    rain
  ]

  let container = document.getElementById(targetId)
  container.innerHTML = ""
  let width = container.clientWidth || 600
  let height = 180

  let opts =
  {
    width: width,
    height: height,
    scales:
    {
      x:
      {
        time: false
      }
    },
    series: [
      {
        label: "Time",
        value: (u, val) => labels[val] || val
      },
      {
        label: "Temp (°C)",
        stroke: "#2e7d32",
        width: 2,
        fill: "rgba(46, 125, 50, 0.15)"
      },
      {
        label: "Feels (°C)",
        stroke: "#1565c0",
        width: 2,
        fill: "rgba(21, 101, 192, 0.15)"
      },
      {
        label: "Wind (km/h)",
        stroke: "#6a1b9a",
        width: 2
      },
      {
        label: "Rain (%)",
        stroke: "#e65100",
        width: 2
      }
    ],
    axes: [
      {
        splits: xValues,
        values: (u, vals) => vals.map(v => labels[v] || ""),
        stroke: "#333333",
        grid: { stroke: "rgba(0, 0, 0, 0.1)" },
        ticks: { stroke: "rgba(0, 0, 0, 0.2)" }
      },
      {
        stroke: "#333333",
        grid: { stroke: "rgba(0, 0, 0, 0.1)" },
        ticks: { stroke: "rgba(0, 0, 0, 0.2)" }
      }
    ],
    legend:
    {
      live: true
    }
  }

  let chart = new uPlot(opts, chartData, container)
  activeCharts.push(chart)
}