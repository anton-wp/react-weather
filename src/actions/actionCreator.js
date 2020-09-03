export const getWeather = (cityWeatherArr) => async (dispatch) => {
  dispatch(getManyWeather(cityWeatherArr))
  dispatch(
    updateCity(
      cityWeatherArr.map((city) => city.id),
      true
    )
  )
}
export const delWeather = (id) => async (dispatch) => {
  dispatch(delWeatherBlock(id))
  dispatch(
    updateCity(
      [id],
      false
    )
  )
}
export const delWeatherBlock = (id) => ({
  type: 'DEL_WEATHER',
  id,
})
export const getManyWeather = (cityWeatherArr) => ({
  type: 'GET_WEATHER',
  cityWeatherArr,
})
export const addWeather = (cityWeather) => ({
  type: 'ADD_WEATHER',
  cityWeather,
})
export const updateCity = (id, isDisabled) => ({
  type: 'UPDATE_CITY',
  isDisabled,
  id,
})
