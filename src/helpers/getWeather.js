import axios from 'axios'
import { WEATHER_API_URL } from 'const'
// import { getWeather } from 'actions/actionCreator'

export function getWeatherAPI(city) {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/group?id=${city}&units=metric&appid=${WEATHER_API_URL}`
    )
    .then((res) => {
      return res.data.list
    })
}
export function addWeatherAPI(id) {
  return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${WEATHER_API_URL}`
      )
      .then((res) => {
      return res.data
    })
}
