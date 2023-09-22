//Create a function to get and display the weather data
async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log("it's working");

  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  const data = await response.json();
  console.log(typeof data, data);
  // above code will take data and change the temperature//

  const tempLondon = document.getElementById("temperatureText");
  const temperature = data.current_weather.temperature;
  tempLondon.textContent = temperature;
  console.log(data.current_weather.temperature);
}

getWeather();
