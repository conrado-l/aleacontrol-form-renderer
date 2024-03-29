import React, { Component } from 'react'
import FormRenderer from './components/FormRenderer'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FormSample1 from './sample1'
import FormSample2 from './sample2'
import { JSONToObject } from './utils'

/**
 * The application, it loads sample1.json as initial state and it renders FormRenderer
 */
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: JSONToObject(FormSample1)
    }

    this.changeFormSample = this.changeFormSample.bind(this)
  }

  /**
   * Loads sample2.json file into the state
   */
  changeFormSample () {
    this.setState({ form: JSONToObject(FormSample2) })
  }

  render () {
    return (
      <Container>
        <div className='d-flex justify-content-center mt-3'>
          <Button id='change-form-sample' variant='info' onClick={this.changeFormSample}> Change Form Sample </Button>
        </div>
        <FormRenderer inputs={this.state.form} />
      </Container>
    )
  }
}

export default App
