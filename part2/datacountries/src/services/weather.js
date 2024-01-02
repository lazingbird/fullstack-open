import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${API_KEY}`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll };
