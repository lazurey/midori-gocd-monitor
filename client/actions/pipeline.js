import { createAction } from 'redux-actions'

import { fetchPipelineGroupInfo, fetchPipelineInfoByName } from '../api/pipeline'
import { showError } from './errors'
import config from '../config'

export const LOAD_PIPELINE_GROUPS_DATA = 'load all pipeline data'
export const LOAD_PIPELINE_DATA = 'load pipeline data by group name'

const loadPipelineGroupsSuccess = createAction(LOAD_PIPELINE_GROUPS_DATA, data => data)
const loadPipelineSuccess = createAction(LOAD_PIPELINE_DATA, data => data)

const intervalArray = []

const clearAllIntervals = () => {
  intervalArray.forEach((i) => {
    clearInterval(i)
  })
}

export function loadPipelineGroupData() {
  clearAllIntervals()
  return dispatch => fetchPipelineGroupInfo()
    .then((res) => {
      res.data.forEach((group) => {
        group.pipelines.forEach((pipeline) => {
          dispatch(loadPipelineInfoByGroupName(pipeline.name, group.name))
        })
      })
      dispatch(loadPipelineGroupsSuccess(res.data.map(group => ({
        name: group.name,
        pipelines: []
      }))))
      clearAllIntervals()
      const fetching = setInterval(() => {
        dispatch(autoRefreshPipelineGroup(res.data))
      }, config.PIPELINE_REFRESH_INTERVAL)
      intervalArray.push(fetching)
    })
    .catch(() => {
      dispatch(showError('Server Disconnected'))
    })
}

export function loadPipelineInfoByGroupName(pipelineName, groupName) {
  return dispatch => fetchPipelineInfoByName(pipelineName)
    .then((res) => {
      dispatch(loadPipelineSuccess({
        name: pipelineName,
        group: groupName,
        pipelines: res.data.pipelines
      }))
    })
    .catch(() => {
      dispatch(showError('Server Disconnected '))
    })
}

export function autoRefreshPipelineGroup(groups) {
  return (dispatch) => {
    groups.forEach((group) => {
      group.pipelines.forEach((pipeline) => {
        dispatch(loadPipelineInfoByGroupName(pipeline.name, group.name))
      })
    })
  }
}
