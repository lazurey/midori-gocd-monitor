import { handleActions } from 'redux-actions'

import { API_ERROR } from '../actions/errors'

const ErrorsReduers = handleActions({
  [API_ERROR]: (state, action) => action.payload
}, {
  show: false,
  message: ''
})

export default ErrorsReduers
