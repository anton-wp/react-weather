import React from 'react'
import { connect } from 'react-redux'

import WeatherBlock from 'components/WeatherBlock'
import AddCityBlock from 'components/AddCityBlock'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <AddCityBlock />
        <div className="contentBlock">
          {this.props.weather.cityWeather.map((city) => (
            <WeatherBlock key={city.id} city={city} />
          ))}
        </div>
      </div>
    )
  }
}
export default connect((state) => ({
  weather: state.weather,
}))(HomePage)
