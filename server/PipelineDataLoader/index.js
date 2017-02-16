import { fetcher } from '../utils/fetchUtil'

const fetchPipelineGroupInfo = (req, res) => {
  fetcher('/config/pipeline_groups')
    .then((data) => {
      res.json(data)
    })
}

const fetchPipelineInfo = (req, res) => {
  fetcher(`/pipelines/${req.params.name}/history`)
    .then((data) => {
      res.json(data)
    })
}

export default {
  fetchPipelineGroupInfo,
  fetchPipelineInfo
}
