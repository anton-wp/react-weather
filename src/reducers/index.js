import { combineReducers } from 'redux'
import weather from './weather'
import city from './city'

const rootReducer = combineReducers({ weather, city })

export default rootReducer
