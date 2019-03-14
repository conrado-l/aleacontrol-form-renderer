import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import StringInput from './StringInput'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Select input for ext and a string input for the phone number
 */
class PhoneInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ext: props.value.ext,
      phone: props.value.phone
    }

    this.updatePhone = this.updatePhone.bind(this)
  }

  /**
   * Updates state, waits for the state update and sends the new phone object to the parent
   * @param {string} inputKey
   * @param {string} inputValue
   */
  updatePhone (inputKey, inputValue) {
    this.setState({ [inputKey]: inputValue }, () => {
      this.props.update(this.props.name, this.state)
    })
  }

  render () {
    return (
      <Row>
        <Col xs={12} sm={this.props.col}>
          <SelectInput name='ext' value={this.state.ext} options={this.props.options} col={12} update={this.updatePhone} />
        </Col>
        <Col xs={12} sm={this.props.col}>
          <StringInput name='phone' value={this.state.phone} col={12} update={this.updatePhone} />
        </Col>
      </Row>
    )
  }
}

PhoneInput.propTypes = {
  /** Input's name */
  name: PropTypes.string.isRequired,
  /** Input's value */
  value: PropTypes.object,
  /** Ext options */
  options: PropTypes.array.isRequired,
  /** Bootstrap's column size */
  col: PropTypes.number,
  /** Callback function when the input changes */
  update: PropTypes.func.isRequired
}

PhoneInput.defaultProps = {
  value: { phone: '', ext: '' },
  col: 6
}

export default PhoneInput
