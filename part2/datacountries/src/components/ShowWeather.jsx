import axios from "axios";
import { useState, useEffect } from "react";

function GetImg({ url }) {
  return <img src={url} alt="" />;
}

function ShowWeather({ capital }) {
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const [weatherData, setWeatherData] = useState(null);
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}${capital}&appid=${API_KEY}`)
      .then((response) => setTempData(response.data.main));
  }, [API_KEY, baseUrl, capital]);

  useEffect(() => {
    axios
      .get(`${baseUrl}${capital}&appid=${API_KEY}`)
      .then((response) => setWeatherData(response.data.weather[0]));
  }, [API_KEY, baseUrl, capital]);

  const getTemp = () => {
    for (const key in tempData) {
      if (key === "temp") {
        return Math.round(tempData[key] - 273.15);
      }
    }
  };

  if (weatherData === null && tempData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>
        {getTemp() !== undefined
          ? `Temperature: ${getTemp()} Celsius`
          : "Temperature: loading"}
      </p>
      <GetImg
        url={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
      ></GetImg>
    </div>
  );
}

export default ShowWeather;
