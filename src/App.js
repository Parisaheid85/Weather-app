import React, { useState } from "react";
import "weather-icons/css/weather-icons.css";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const apiKey = "28eabf0a9678d9a83d96055026e180b3";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const getweather = (e) => {
    if (e.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
        });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <input
          type="text"
          placeholder="Search by City name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={getweather}
        />
        {typeof weather.main !== "undefined" ? (
          <div className="weather-container">
            <div className="location">
              {weather.name} , {weather.sys.country}
            </div>
            <div className="temp">
              <i className="wi wi-day-sunny"></i>
              {Math.round(weather.main.temp - 273.15)}°C
            </div>
            <div className="weather">
              <i class="wi wi-day-cloudy"></i>
              {weather.weather[0].main}
            </div>
            <div className="wind">
              <i class="wi wi-day-windy"></i>
              {weather.wind.speed}m/s
            </div>
          </div>
        ) : (
          <div className="weather-container">
            {/* <h1>Welcome to weather forcast</h1> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
