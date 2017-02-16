import express from 'express'

import PipelineDataLoader from './PipelineDataLoader'
import config from './config'

const app = express()

app.use('/', express.static('static'))

app.get('/api/pipelines', PipelineDataLoader.fetchPipelineGroupInfo)
app.get('/api/pipeline/:name', PipelineDataLoader.fetchPipelineInfo)

app.listen(config.PORT, () => {
  console.log(`Example app listening to ${config.PORT}!`)
})
