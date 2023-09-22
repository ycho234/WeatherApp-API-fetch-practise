//Create a function to get and display the weather data
async function getWeather(){
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true", {
        headers: {
            Accept : "application/json",
        }, })
    console.log("it's working");

    if(!response.ok){
        console.error(`Status: ${response.status}`);
        console.error(`Text: ${await response.text()}`);
        return;
    };
    const data = await response.json();

    console.log(typeof data, data);
    alert(data.weather);
}

getWeather();