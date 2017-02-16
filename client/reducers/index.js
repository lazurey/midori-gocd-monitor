import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import errors from './errorsReducer'
import pipeline from './pipelineReducer'

export default combineReducers({
  routing,
  pipeline,
  errors
})
