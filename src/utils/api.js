import axios from 'axios';

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&units=metric&cnt=5` ;

export default {
  fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  return axios.get(url)
    .then(response => response.data);
  }
};
