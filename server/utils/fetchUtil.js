import request from 'superagent'

import config from '../config'

export const fetcher = path => request.get(`${config.API_SERVER}${path}`)
    .auth(config.USERNAME, config.PASSWORD)
    .then(response => response.body)
    .catch(err => `cannot load data from gocd, error message: ${err}`)
