import {combineReducers} from 'redux'

import counter from './counter/reducer'
import news from './news/reducer'

const rootReducer = combineReducers({
  counter, news
})

export default rootReducer;