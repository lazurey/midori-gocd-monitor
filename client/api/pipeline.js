import { apiServer, formatResponse } from './'

export const fetchPipelineGroupInfo = () => fetch(`${apiServer}/api/pipelines`)
    .then(formatResponse)

export const fetchPipelineInfoByName = name => fetch(`${apiServer}/api/pipeline/${name}`)
    .then(formatResponse)
