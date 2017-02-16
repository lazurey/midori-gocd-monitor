import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadPipelineGroupData } from '../../actions/pipeline'
import { hideError } from '../../actions/errors'
import PipelineGroup from '../../components/PipelineGroup'
import ErrorMessage from '../../components/ErrorMessage'

import config from '../../config'
import style from './style.css'

class PipelineMonitorHome extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pipeline: PropTypes.array,
    errors: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.loadPipelineGroupData()
  }

  render() {
    const { pipeline, errors } = this.props
    return (
      <div>
        <h1>{ config.BOARD_NAME }</h1>
        <div className={style.row}>
          { pipeline.map((group, i) => (<PipelineGroup group={group} key={i} />)) }
        </div>
        <ErrorMessage show={errors.show} message={errors.message} />
        <footer>
          <p>© 2017 <a href="https://the-blackhole.github.io/" target="_blank" rel="noopener noreferrer"> - The Blackhole Studio - </a></p>
        </footer>
      </div>
    )
  }
}

const PipelineMonitorHomeActions = { loadPipelineGroupData, hideError }
const mapState = state => ({
  pipeline: state.pipeline,
  errors: state.errors
})
const mapAction = dispatch => ({
  actions: bindActionCreators(PipelineMonitorHomeActions, dispatch)
})

export default connect(mapState, mapAction)(PipelineMonitorHome)
