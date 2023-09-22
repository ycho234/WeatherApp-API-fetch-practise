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
}
getWeather();

// Button
const button = document.getElementById("weatherButton");
button.addEventListener("click", function () {
  window.location.href = "https://www.bbc.com/weather/2643743";
});

console.log(document.addEventListener("DOMContentLoaded", getWeather));
