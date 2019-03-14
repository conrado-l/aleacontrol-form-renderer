import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

/**
 * Contains the input and adds a label to it
 */
class InputContainer extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Label>{this.props.label}</Form.Label>
        <div>{this.props.children}</div>
      </Form.Group>
    )
  }
}

InputContainer.propTypes = {
  /** Input/children label */
  label: PropTypes.string.isRequired,
  /** Children element/s */
  children: PropTypes.object.isRequired
}
export default InputContainer
