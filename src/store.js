import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'

const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))

const store = configureStore({})

export default store
