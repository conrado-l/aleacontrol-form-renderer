import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StringInput extends Component {
  render () {
    return (
      <input type='text'
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.props.update(this.props.name, e.target.value)} />
    )
  }
}

StringInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  update: PropTypes.func
}

export default StringInput
