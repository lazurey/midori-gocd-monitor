import React, { PropTypes } from 'react'

import style from './style.css'

const ErrorMessage = (props) => {
  const { show, message } = props
  return (
    <div className={style.errorMessage} hidden={!show}>
      { message }
    </div>
  )
}

ErrorMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string
}

export default ErrorMessage
