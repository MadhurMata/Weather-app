import axios from 'axios';

// TODO: Use .env
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5f341700ad314a01412c1ff2c920d72f';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });
  return data;
}