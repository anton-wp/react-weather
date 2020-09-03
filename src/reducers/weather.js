const store = {
  id: [],
  cityWeather: [],
}

const weather = (state = store, { type, cityWeather, cityWeatherArr, id }) => {
  switch (type) {
    case 'GET_WEATHER':
      return {
        id: cityWeatherArr.map((city) => city.id),
        cityWeather: cityWeatherArr,
      }
    case 'DEL_WEATHER':
      return {
        id: state.id.filter((city) => city !== id),
        cityWeather: state.cityWeather.filter((city) => city.id !== id),
      }
    case 'ADD_WEATHER':
      return {
        id: [...state.id, ...[cityWeather.id]],
        cityWeather: [...state.cityWeather, cityWeather],
      }
    default:
      return state
  }
}

export default weather
