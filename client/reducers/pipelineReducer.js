import { handleActions } from 'redux-actions'

import { LOAD_PIPELINE_DATA, LOAD_PIPELINE_GROUPS_DATA } from '../actions/pipeline'

const PipelineReduers = handleActions({
  [LOAD_PIPELINE_DATA]: (state = [], { payload }) => {
    const newState = [...state]
    const existingGIndex = newState.findIndex(existing => existing.name === payload.group)
    if (existingGIndex === -1) {
      newState.push({
        name: payload.group,
        pipelines: [payload]
      })
    } else {
      const existingGroup = newState[existingGIndex]
      const existingPIndex = existingGroup.pipelines.findIndex(e => e.name === payload.name)
      if (existingPIndex === -1) {
        existingGroup.pipelines.push(payload)
      } else {
        existingGroup.pipelines[existingPIndex] = payload
      }
      newState[existingGIndex] = existingGroup
    }
    return newState
  },
  [LOAD_PIPELINE_GROUPS_DATA]: (state = [], { payload }) => {
    const newState = [...state]
    payload.forEach((group) => {
      if (!newState.find(existing => existing.name === group.name)) {
        newState.push(group)
      }
    })
    return newState
  }
}, [])

export default PipelineReduers
