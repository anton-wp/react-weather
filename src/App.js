import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import { connect } from 'react-redux'
import { addWeather, getWeather } from 'actions/actionCreator'

import HomePage from 'page/HomePage'
import AboutPage from 'page/AboutPage'
import ErrorPage from 'page/ErrorPage'
import './App.css'

class App extends React.Component {
  state = {
    key: '7e96f0c53dbb9c94d563be927a5102e7',
  }
  componentDidMount() {
    if (localStorage.getItem('city')) {
      this.getWeatherCities()
    }
  }
  getWeatherCities = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=${localStorage.getItem(
          'city'
        )}&units=metric&appid=${this.state.key}`
      )
      .then((res) => {
        this.props.getWeather(res.data.list)
      })
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/404" exact component={ErrorPage} />
          <Route path="/:id" exact component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(
  (state) => ({
    weather: state.weather,
  }),
  { addWeather, getWeather }
)(App)
