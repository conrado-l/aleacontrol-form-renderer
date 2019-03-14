import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputTypes from '../consts/inputTypes'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

/**
 * Generic input that can be used for email or text. It can support more string types, adding them to the mapping.
 */
class GenericTextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /**
 * Updates the input value and sends the value through the parent callback function
 * @param {object} e Event
 */
  handleChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
    this.props.update(this.props.name, newValue)
  }

    /**
     * Mapping: component name -> input type
     */
    types = {
      [InputTypes.STRING]: 'text',
      [InputTypes.EMAIL]: 'email'
    }

    /**
     * Gets the input type based on the types mapping
     * @returns {string}
     */
    inputType () {
      return this.types[this.props.component]
    }

    render () {
      return (
        <Row>
          <Col xs={12} sm={this.props.col}>
            <Form.Control type={this.inputType()}
              name={this.props.name}
              value={this.state.value || ''}
              onChange={this.handleChange} />
          </Col>
        </Row>
      )
    }
}

GenericTextInput.propTypes = {
  /** Component name for computing the input type */
  component: PropTypes.string.isRequired,
  /** Name of the input */
  name: PropTypes.string.isRequired,
  /** Input's value */
  value: PropTypes.string,
  /** Bootstrap's column size */
  col: PropTypes.number,
  /** Callback function when the input changes */
  update: PropTypes.func.isRequired
}

GenericTextInput.defaultProps = {
  value: '',
  col: 6
}
export default GenericTextInput
