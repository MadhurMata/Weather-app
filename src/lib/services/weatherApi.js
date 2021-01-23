import axios from 'axios';

export const fetchWeather = async (query) => {
  const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
  const { data } = await axios.get(REACT_APP_API_URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: REACT_APP_API_KEY
    }
  });
  return data;
}