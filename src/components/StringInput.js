import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StringInput extends Component {
  render () {
    return (
      <input type='text'
        className={`form-control col-xs-12 col-md-${this.props.col}`}
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.props.update(this.props.name, e.target.value)} />
    )
  }
}

StringInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  col: PropTypes.number,
  update: PropTypes.func
}

export default StringInput
