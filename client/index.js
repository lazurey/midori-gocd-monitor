import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

import PipelineMonitorHome from './containers/PipelineMonitorHome'
import configure from './store'

const store = configure({})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PipelineMonitorHome} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
