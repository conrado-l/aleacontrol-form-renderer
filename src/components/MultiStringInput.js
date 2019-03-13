import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StringInput from './StringInput'
import Button from 'react-bootstrap/Button'

/**
 * Multiple and different string inputs with the ability to add or delete them individually
 */
class MultiStringInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stringInputs: props.value
    }

    this.addInput = this.addInput.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.deleteLastInput = this.deleteLastInput.bind(this)
  }

  /**
   * Send the inputs to the parent and filter the empty inputs
   */
  updateMultiString () {
    this.props.update(this.props.name, this.state.stringInputs.filter((input) => input !== ''))
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
   * Renders the inputs
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
        <div className='d-flex justify-content-around'>
          <Button id='add' variant='outline-success' onClick={this.addInput}> Add input</Button>
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
