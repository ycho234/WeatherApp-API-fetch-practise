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
  // select the id of the elements working with
  // the button, trigger event when clicked
  // change the colour of the body
  // change the colour of the container
  // change the colour of the buttons
  const mode = document.getElementById("modeButton");
  const body = document.getElementById("body");
  const container = document.getElementById("container");
  // add an event listener
  mode.addEventListener("click", async function () {
    // Get the computed style of the body
    const bodyStyle = getComputedStyle(body);
    // this give the object from the getComputedstyle
    console.log(bodyStyle);
    // if the body is white
    if (
      bodyStyle.backgroundColor === "rgb(255, 255, 255)" ||
      bodyStyle.backgroundColor === "#ffffff"
    ) {
      body.style.backgroundColor = "#000000";
      mode.textContent = "Light Mode";
    } else if (
      bodyStyle.backgroundColor === "rgb(0, 0, 0)" ||
      bodyStyle.backgroundColor === "#000000"
    ) {
      body.style.backgroundColor = "#ffffff";
      mode.textContent = "Dark Mode";
    }
    // conditions: make the body black, make the container dark grey, make the buttons black
    // else keep them the original colour
  });
}

changeMode();
