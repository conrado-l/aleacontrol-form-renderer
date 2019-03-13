import React, { Component } from 'react'
import FormRenderer from './components/FormRenderer'
import Container from 'react-bootstrap/Container'
import FormSourceSelector from './components/FormSourceSelector'
import FormSample1 from './sample1'
import FormSample2 from './sample2'
import { JSONToObject } from './utils'
import './styles/App.scss'

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
        <div className='center-content'>
          <FormSourceSelector changeFormSample={this.changeFormSample} />
          <FormRenderer inputs={this.state.form} />
        </div>
      </Container>
    )
  }
}

export default App
