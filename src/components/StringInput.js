import React, { Component } from 'react'

class StringInput extends Component {
  render () {
    return (
      <input type='text' value={this.props.value}/>
    )
  }
}

export default StringInput
