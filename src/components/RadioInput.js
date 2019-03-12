import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioInput extends Component {
  /**
   * Renders the radio buttons
   * @returns {any[]}
   */
  renderButtons () {
    return this.props.options.map((input) => {
      return <div key={input.value}>
        <input type='radio'
          id={input.value}
          name={this.props.name}
          value={input.value}
          defaultChecked={this.props.value === input.value} />
        <label htmlFor={input.value}> {input.description} </label>
      </div>
    })
  }

  render () {
    return (
      <div onChange={(e) => this.props.update(this.props.name, e.target.value)}>
        {this.renderButtons()}
      </div>
    )
  }
}

RadioInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  update: PropTypes.func
}
export default RadioInput
