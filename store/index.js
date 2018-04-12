import rootReducer from '../redux/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default (initialState = {}) => {
  return applyMiddleware(thunk)(createStore)(rootReducer)
}