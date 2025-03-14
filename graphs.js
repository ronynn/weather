let chartJsLoaded = false;



let chartsCreated = false;



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
    loadChartJS();
  }
}



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