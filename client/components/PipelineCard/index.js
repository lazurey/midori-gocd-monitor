import React, { Component, PropTypes } from 'react'

import style from './style.css'

class PipelineCard extends Component {
  static propTypes = {
    pipeline: PropTypes.object.isRequired,
  }

  _simplifyName(name, group) {
    const splitted = name.split('-')
    return (group === 'defaultGroup' && splitted.length > 1) ? name : splitted[splitted.length - 1]
  }

  render() {
    const { name, group, pipelines } = this.props.pipeline

    if (!!pipelines && pipelines.length > 0) {
      const validStage = pipelines[0].stages.filter(stage => !!stage.result)
      const status = (validStage.length > 0) ? (validStage[validStage.length - 1].result) : 'cancelled'
      return (
        <li className={style[`pipelineCard__${status.toLowerCase()}`]}>
          <h5>{ this._simplifyName(name, group) }</h5>
        </li>
      )
    }
    return null
  }
}

export default PipelineCard
