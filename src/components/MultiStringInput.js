import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StringInput from './StringInput'
import Button from 'react-bootstrap/Button'

class MultiStringInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stringInputs: props.value
    }

    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.updateRow = this.updateRow.bind(this)
    this.deleteInputs = this.deleteInputs.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  updateMultiString () {
    this.props.update(this.props.name, this.state.stringInputs)
  }

  /**
     * Add a new input row
     */

  addRow () {
    this.setState(prevState => ({
      stringInputs: [...prevState.stringInputs, '']
    }), () => this.updateMultiString())
  }

  /**
       * Delete an specific input
       * @param {string} inputContent Input
       */
  deleteRow (inputContent) { // TODO: delete by element index?
    let filteredInputs = this.state.stringInputs.filter(input => {
      return input !== inputContent
    })
    this.setState({ stringInputs: filteredInputs }, () => this.updateMultiString())
  }

  /**
     * Update an input value
     */

  updateRow (index, value) {
    let updatedRow = this.state.stringInputs[index]
    this.setState(prevState => ({
      stringInputs: [...prevState.stringInputs, '']
    }), () => this.updateMultiString())
  }

  /**
     * Delete all inputs
     */

  deleteInputs (index, value) {
    this.setState({ stringInputs: [] })
  }

  /**
     * Clear all inputs
     */

  clearInputs (index, value) {
    const clearedInputs = this.state.stringInputs.map(() => '')
    this.setState({ stringInputs: clearedInputs })
  }

  render () {
    let inputs = this.state.stringInputs.map((input, index) => {
      return <div className='form-inline' key={index}>
        <StringInput name={index} value={input} update={this.updateRow} />
        <Button onClick={() => this.deleteRow(input)}> Delete </Button>
      </div>
    })
    return (
      <div>
        {inputs}
        <Button onClick={this.addRow}> Add </Button>
        <Button onClick={this.clearInputs}> Clear inputs </Button>
        <Button onClick={this.deleteInputs}> Delete inputs </Button>
      </div>
    )
  }
}

MultiStringInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array,
  col: PropTypes.number,
  update: PropTypes.func
}

export default MultiStringInput
