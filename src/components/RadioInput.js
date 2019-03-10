import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioInput extends Component {
  render () {
    // Generate the radio button options
    const buttons = this.props.options.map((input) => {
      return <div key={input.value}>
        <input type='radio' id={input.value} name={this.props.name} value={input.value} />
        <label htmlFor={input.value}> {input.description} </label>
      </div>
    })
    return (
      <div onChange={(e) => this.props.update(this.props.name, e.target.value)}>
        {buttons}
      </div>
    )
  }
}

RadioInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  update: PropTypes.func
}
export default RadioInput
