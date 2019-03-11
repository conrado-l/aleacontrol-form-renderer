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
    this.updateRow = this.updateRow.bind(this)
    this.deleteLastInput = this.deleteLastInput.bind(this)
    this.deleteInputs = this.deleteInputs.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  updateMultiString () {
    this.props.update(this.props.name, this.state.stringInputs)
  }

  /**
  * Adds a new input row
  */
  addRow () {
    this.setState(prevState => ({
      stringInputs: [...prevState.stringInputs, '']
    }), () => this.updateMultiString())
  }

  /**
   * Deletes the last row
   * According to the JSON sample, there is no ID in every input, so I can't delete by ID individually adding a
   * delete button for every row
   */
  deleteLastInput () {
    let deletedLastInputState = [...this.state.stringInputs]
    deletedLastInputState.splice(this.state.stringInputs.length - 1, 1)
    this.setState({ stringInputs: deletedLastInputState }, () => this.updateMultiString())
  }

  /**
  * Updates an input value
  */
  updateRow (index, value) {
    let inputs = this.state.stringInputs
    inputs[index] = value
    this.setState({
      stringInputs: inputs
    }, () => this.updateMultiString())
  }

  /**
  * Deletes the all inputs
  */
  deleteInputs () {
    this.setState({ stringInputs: [] }, () => this.updateMultiString())
  }

  /**
  * Clear all inputs
  */
  clearInputs () {
    const clearedInputs = this.state.stringInputs.map(() => '')
    this.setState({ stringInputs: clearedInputs }) // TODO: delete array in parent?
  }

  /**
   * Renders the inputs
   * @returns {*}
   */
  renderInputs () {
    return this.state.stringInputs.map((input, index) => {
      return <div className='mb-3' key={index}>
        <StringInput name={`${index}`} value={input} update={this.updateRow} />
      </div>
    })
  }

  render () {
    return (
      <div>
        {this.renderInputs()}
        <div className='d-flex justify-content-between'>
          <Button variant='outline-success' onClick={this.addRow}> Add</Button>
          <Button variant='outline-warning' disabled={!this.state.stringInputs.length} onClick={this.clearInputs}> Clear inputs </Button>
          <Button variant='outline-danger' disabled={!this.state.stringInputs.length} onClick={this.deleteLastInput}> Delete last input </Button>
        </div>
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
