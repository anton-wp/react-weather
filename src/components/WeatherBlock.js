import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { delWeather } from 'actions/actionCreator'

class WeatherBlock extends React.Component {
  delBlock = () => {
    localStorage.setItem(
      'city',
      this.props.cityId.filter((id) => id !== this.props.city.id)
    )
    this.props.delWeather(this.props.city.id)
  }
  render() {
    let weather = this.props.city
    return (
      <div className="p-relative">
        <Link className="weather-card" to={`/${weather.id}`}>
          <h2 className="weather-title">Weather in {weather.name}</h2>
          <img
            className="weather-image"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
          <h3 className="weather-temp">+{Math.round(weather.main.temp)}°C</h3>
        </Link>
        <button className="button-delete" onClick={this.delBlock}>
          x
        </button>
      </div>
    )
  }
}
export default connect(
  (state) => ({
    cityId: state.weather.id,
  }),
  { delWeather }
)(WeatherBlock)
