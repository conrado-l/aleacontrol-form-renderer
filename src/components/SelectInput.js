import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectInput extends Component {
  render () {
    // Generate the select options
    const options = this.props.options.map((input) => {
      return <option value={input.value} key={input.value}> {input.description}</option>
    })

    return (
      <select className={`form-control col-xs-12 col-${this.props.col}`} onChange={(e) => this.props.update(this.props.name, e.target.value)}>
        {options}
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
