import { getWeatherAPI, addWeatherAPI } from 'helpers/getWeather'

export const getWeather = (id) => async (dispatch) => {
  getWeatherAPI(id).then((data) => {
    dispatch(saveWeather(data))
  })
}
export const getWeatherBlock = (id) => async (dispatch) => {
  addWeatherAPI(id).then((data) => {
    dispatch(addWeather(data))
  })
}

export const saveWeather = (cityWeatherArr) => async (dispatch) => {
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
  dispatch(updateCity([id], false))
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
