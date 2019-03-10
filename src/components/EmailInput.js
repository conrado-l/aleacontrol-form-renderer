import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EmailInput extends Component {
  render () {
    return (
      <input type='email'
        className={`form-control col-xs-12 col-md-${this.props.col}`}
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.props.update(this.props.name, e.target.value)} />
    )
  }
}

EmailInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  col: PropTypes.number,
  update: PropTypes.func
}
export default EmailInput
