import React, { PropTypes } from 'react'

import PipelineCard from '../PipelineCard'
import style from './style.css'

const PipelineGroup = (props) => {
  const { name, pipelines } = props.group
  return (
    <div className={style.pipelineGroup}>
      <h3 className={style.groupName}><span>{ name }</span></h3>
      <ul className={style.pipelineList}>
        {
          pipelines.map((pipeline, i) => (<PipelineCard pipeline={pipeline} key={i} />))
        }
      </ul>
    </div>
  )
}

PipelineGroup.propTypes = {
  group: PropTypes.object.isRequired
}

export default PipelineGroup
