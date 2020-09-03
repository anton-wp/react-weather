import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AboutPage extends React.Component {
  state = {
    redirect: false,
    data: {},
  }
  componentDidMount = () => {
    if (
      localStorage
        .getItem('city')
        .split(',')
        .filter((city) => +city === +this.props.match.params.id).length === 0
    ) {
      this.setState({
        redirect: true,
      })
    }
  }

  weather = () => {
    return this.props.cityWeather.filter(
      (city) => +city === +this.props.match.params.id
    )[0]
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/404" />
    }

    return (
      <div className="about-page">
        <Link className="button-back" to="/">
          <i class="arrow left"></i> Home
        </Link>
        <h1>About weather in {this.weather.name}</h1>
        <img
          className="weather-image"
          src={
            this.weather.weather
              ? `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
              : 'http://openweathermap.org/img/wn/01d@2x.png'
          }
          alt=""
        />
        <p>Wind: {this.weather.wind ? this.weather.wind.speed : 1} km/h</p>
        <p>Temp max: {this.weather.main ? this.weather.main.temp_max : 1} °C</p>
        <p>Temp min: {this.weather.main ? this.weather.main.temp_min : 1} °C</p>
      </div>
    )
  }
}
export default connect((state) => ({
  cityWeather: state.weather.cityWeather,
}))(AboutPage)
