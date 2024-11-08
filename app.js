const apiKey = '442dd88fa1a6154298c5d44afdfe5078'; // Your API key here

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherDisplay = document.getElementById('weatherDisplay');

  if (!city) {
    weatherDisplay.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
      throw new Error("City not found");
    }

    const weatherData = await response.json();
    const { name } = weatherData;
    const { temp } = weatherData.main;
    const { description } = weatherData.weather[0];

    weatherDisplay.innerHTML = `Weather in ${name}: ${temp}°C, ${description}`;
  } catch (error) {
    weatherDisplay.innerHTML = error.message;
  }
}
