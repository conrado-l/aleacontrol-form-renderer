import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EmailInput extends Component {
  render () {
    return (
      <input type='email' value={this.props.value} />
    )
  }
}

EmailInput.propTypes = {
  value: PropTypes.string
}
export default EmailInput
