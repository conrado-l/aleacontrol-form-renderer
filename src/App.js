import React, { Component } from 'react'
import FormRenderer from './components/FormRenderer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App d-flex justify-content-center align-content-center'>
        <FormRenderer />
      </div>
    )
  }
}

export default App
