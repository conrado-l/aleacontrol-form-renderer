import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import '../styles/RadioInput.scss'

/**
 * Radio input with options
 */
class RadioInput extends Component {
  /**
   * Renders the radio buttons
   */
  renderButtons () {
    return this.props.options.map((input) => {
      return <div key={input.value}>
        <Form.Check
          inline
          type='radio'
          id={input.value}
          name={this.props.name}
          label={input.description}
          value={input.value}
          onChange={() => this.props.update(this.props.name, input.value)}
          defaultChecked={this.props.value === input.value} />
      </div>
    })
  }

  render () {
    return (
      <div className='radio-input-container'>
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
