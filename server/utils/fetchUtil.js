import request from 'superagent'

import config from '../config'

export const fetcher = path => request.get(`${config.apiServer}${path}`)
    .auth(config.username, config.password)
    .then(response => response.body)
    .catch(err => `cannot load data from gocd, error message: ${err}`)
