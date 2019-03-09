import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EmailInput extends Component {
  render () {
    return (
      <input type='email'
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.props.update(this.props.name, e.target.value)} />
    )
  }
}

EmailInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}
export default EmailInput
