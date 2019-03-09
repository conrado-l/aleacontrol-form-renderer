import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import StringInput from './StringInput'

class PhoneInput extends Component {
  render () {
    return (
      <div>
        <SelectInput name={this.props.name} value={this.props.ext} options={this.props.options} update={this.props.update} />
        <StringInput value={this.props.phone} update={this.props.update} />
      </div>
    )
  }
}

PhoneInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  phone: PropTypes.string,
  ext: PropTypes.string,
  update: PropTypes.func
}

export default PhoneInput
