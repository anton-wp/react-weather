import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { addWeather, getWeather } from 'actions/actionCreator'

import HomePage from 'page/HomePage'
import AboutPage from 'page/AboutPage'
import ErrorPage from 'page/ErrorPage'
import './App.css'

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('city')) {
      this.getWeatherCities()
    }
  }
  getWeatherCities = () => {
    this.props.getWeather(localStorage.getItem('city'))
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
