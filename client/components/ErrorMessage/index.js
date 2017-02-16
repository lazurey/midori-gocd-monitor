import React, { Component, PropTypes } from 'react'

class ErrorMessage extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string,
    hideError: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this._hideError = this._hideError.bind(this)
  }

  _hideError() {
    this.props.hideError()
  }

  render() {
    const { show, message } = this.props
    return (
      <div
        active={show}
        onActionClick={this._hideError}
        onTimeout={this._hideError}
        action="OK"
      >
        {message}
      </div>
    )
  }
}

export default ErrorMessage
