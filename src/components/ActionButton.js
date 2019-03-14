import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import '../styles/ActionButton.scss'

/**
 * Button that fires a callback function on click
 */
class ActionButton extends Component {
  render () {
    return (
      <Button variant='info' className='change-data-button' onClick={this.props.clicked}>
        {this.props.label}</Button>
    )
  }
}

ActionButton.propTypes = {
  /** Button's action name */
  label: PropTypes.string,
  /** Callback function executed when the button is clicked */
  clicked: PropTypes.func.isRequired
}

ActionButton.defaultProps = {
  label: 'Button action'
}
export default ActionButton
