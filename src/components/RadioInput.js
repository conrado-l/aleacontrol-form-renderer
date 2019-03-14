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
  /** Input's name */
  name: PropTypes.string.isRequired,
  /** Input's value */
  value: PropTypes.string,
  /** Radio button options */
  options: PropTypes.array.isRequired,
  /** Callback function when the input changes */
  update: PropTypes.func.isRequired
}

RadioInput.defaultProps = {
  value: '',
  col: 6
}
export default RadioInput
