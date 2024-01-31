//Create a function to get and display the weather data
async function getWeather() {
  //fetch the weather data
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  //Check if the function is working
  console.log("it's working");

  //if the request fail log an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  //weather object
  const data = await response.json();
  console.log(typeof data, data);

  //Temperature display
  const tempLondon = document.getElementById("temperatureText");
  const temperature = data.current_weather.temperature;
  tempLondon.textContent = temperature;
  console.log(data.current_weather.temperature);

  //Time display

  const timeLondon = document.getElementById("timeText");
  const time = data.current_weather.time;
  timeLondon.textContent = time;
  console.log(data.current_weather.time);

  // units display

  const unitsLondon = document.getElementById("unitText");
  const units = data.current_weather_units.temperature;
  unitsLondon.textContent = units;
}

getWeather();

console.log(document.addEventListener("DOMContentLoaded", getWeather));

// MAKE A FUNCTION TO CHNAGE THE TEMPERATURE
async function changeUnit() {
  //select the ID of the parts we are working with
  //selected the button since this will trigger the event
  // selected the temperatureText and unitText since these will be changing
  const unitButton = document.getElementById("unitsButton");
  const temperatureText = document.getElementById("temperatureText");
  const unitText = document.getElementById("unitText");

  //add an event listener to the button
  unitButton.addEventListener("click", async function () {
    if (unitText.textContent == "°C") {
      temperatureText.textContent = temperatureText.textContent * (9 / 5) + 32;
      unitText.textContent = "°F";
      unitButton.textContent = "Change to °C";
    } else {
      temperatureText.textContent =
        (temperatureText.textContent - 32) * (5 / 9);
      unitText.textContent = "°C";
      unitButton.textContent = "Change to °F";
    }
  });
}
changeUnit();

async function changeMode() {
  const mode = document.getElementById("modeButton");
  const body = document.getElementById("body");
  const container = document.getElementById("container");

  mode.addEventListener("click", async function () {
    const bodyStyle = getComputedStyle(body);

    console.log(bodyStyle);

    if (
      bodyStyle.backgroundColor === "rgb(255, 255, 255)" ||
      bodyStyle.backgroundColor === "#ffffff"
    ) {
      body.style.background = "#192125";
      mode.textContent = "Light Mode";
      container.style.background =
        "linear-gradient(to top right, #424546, #04283c";
    } else if (
      bodyStyle.backgroundColor === "rgb(25, 33, 37)" ||
      bodyStyle.backgroundColor === "#192125"
    ) {
      body.style.backgroundColor = "#ffffff";
      mode.textContent = "Dark Mode";
      container.style.background =
        "linear-gradient(to top right, #95c5ce, #3782ad)";
    }
  });
}

changeMode();
