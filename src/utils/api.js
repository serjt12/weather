import axios from 'axios';

const API_KEY = 'd443bd3724f2d1fc577bb708894eb329';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric` ;

export default {
  fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  return axios.get(url)
    .then(response => response.data.info);
  }
};
