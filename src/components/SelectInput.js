import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectInput extends Component {
  /**
   * Renders the select options
   * @returns {any[]}
   */
  renderOptions () {
    return this.props.options.map((input) => {
      return <option value={input.value} key={input.value}> {input.description}</option>
    })
  }

  render () {
    return (
      <select className={`form-control col-xs-12 col-${this.props.col}`} onChange={(e) => this.props.update(this.props.name, e.target.value)}>
        {this.renderOptions()}
      </select>
    )
  }
}

SelectInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  col: PropTypes.number,
  update: PropTypes.func
}
export default SelectInput
