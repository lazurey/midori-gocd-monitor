import { createAction } from 'redux-actions'

export const API_ERROR = 'errors from API'

export const showError = createAction(API_ERROR, message => ({ show: true, message }))
export const hideError = createAction(API_ERROR, () => ({ show: false, message: '' }))
