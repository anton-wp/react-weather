import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateCity } from 'actions/actionCreator'
import { getWeatherBlock } from 'actions/actionCreator'

class AddCityBlock extends React.Component {
  state = {
    selectedOption: {},
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  getWeatherCity = (id) => {
    this.props.getWeatherBlock(id)
  }
  addCity = () => {
    if (!this.props.weather.id.includes(this.state.selectedOption.id)) {
      this.props.updateCity([this.state.selectedOption.id], true)
      this.getWeatherCity(this.state.selectedOption.id)

      let newCity = [
        ...this.props.weather.id,
        ...[this.state.selectedOption.id],
      ]
      localStorage.setItem('city', newCity)
    }
  }
  render() {
    const pr = this.props
    return (
      <div className="add-city_block">
        <Select
          className="city-select"
          onChange={this.handleChange}
          options={pr.city}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          placeholder="City"
        />
        <button
          className="city-add"
          onClick={this.state.selectedOption ? this.addCity : null}
        >
          add City
        </button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    city: state.city,
    weather: state.weather,
  }),
  { updateCity, getWeatherBlock }
)(AddCityBlock)
