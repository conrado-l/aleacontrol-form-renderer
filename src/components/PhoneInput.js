import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import StringInput from './StringInput'

class PhoneInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ext: props.value.ext,
      phone: props.value.phone
    }

    this.updatePhone = this.updatePhone.bind(this)
  }

  updatePhone (inputKey, inputValue) {
    // Update state, wait for the state update and send the new phone object to the parent
    this.setState({ [inputKey]: inputValue }, () => {
      this.props.update('phone', this.state)
    })
  }

  render () {
    return (
      <div>
        <SelectInput name='ext' value={this.state.ext} options={this.props.options} update={this.updatePhone} />
        <StringInput name='phone' value={this.state.phone} update={this.updatePhone} />
      </div>
    )
  }
}

PhoneInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  options: PropTypes.array,
  update: PropTypes.func
}

export default PhoneInput
