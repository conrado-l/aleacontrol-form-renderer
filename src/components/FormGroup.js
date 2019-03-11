import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormGroup extends Component {
  render () {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.for}>{this.props.label}</label>
        <div>{this.props.children}</div>
      </div>

    )
  }
}

FormGroup.propTypes = {
  label: PropTypes.string,
  for: PropTypes.string,
  children: PropTypes.object
}
export default FormGroup
