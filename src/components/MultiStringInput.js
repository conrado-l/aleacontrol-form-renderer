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

    this.addInput = this.addInput.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.deleteLastInput = this.deleteLastInput.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  updateMultiString () {
    this.props.update(this.props.name, this.state.stringInputs)
  }

  /**
  * Adds a new input
  */
  addInput () {
    this.setState(prevState => ({
      stringInputs: [...prevState.stringInputs, '']
    }), () => this.updateMultiString())
  }

  /**
   * Deletes the last input
   */
  deleteLastInput () {
    let deletedLastInputState = [...this.state.stringInputs]
    deletedLastInputState.splice(this.state.stringInputs.length - 1, 1)
    this.setState({ stringInputs: deletedLastInputState }, () => this.updateMultiString())
  }

  /**
  * Updates an input value
  */
  updateInput (index, value) {
    let inputs = this.state.stringInputs
    inputs[index] = value
    this.setState({
      stringInputs: inputs
    }, () => this.updateMultiString())
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
        <StringInput name={`${index}`} value={input} col={this.props.col} update={this.updateInput} />
      </div>
    })
  }

  render () {
    return (
      <div>
        {this.renderInputs()}
        <div className='d-flex justify-content-between'>
          <Button id='add' variant='outline-success' onClick={this.addInput}> Add</Button>
          <Button id='clear' variant='outline-warning' disabled={!this.state.stringInputs.length} onClick={this.clearInputs}> Clear inputs </Button>
          <Button id='delete' variant='outline-danger' disabled={!this.state.stringInputs.length} onClick={this.deleteLastInput}> Delete last input </Button>
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
