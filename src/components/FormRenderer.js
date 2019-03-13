import React, { Component } from 'react'
import InputContainer from './InputContainer'
import InputTypes from '../consts/inputTypes'
import SelectInput from './SelectInput'
import StringInput from './StringInput'
import EmailInput from './EmailInput'
import RadioInput from './RadioInput'
import PhoneInput from './PhoneInput'
import MultiStringInput from './MultiStringInput'
// import GenericTextInput from './GenericTextInput' //uncomment for testing
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import '../styles/FormRenderer.scss'

/**
 * Generates inputs dynamically based on the component name and related attributes
 */
class FormRenderer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      request: {}
    }

    this.sendForm = this.sendForm.bind(this)
    this.updateFormInput = this.updateFormInput.bind(this)
  }

    /**
     * Mapping: JSON component name attribute -> component imports
     */
    components = { // eslint-disable-line
      // Same functionality as using StringInput and EmailInput, comment the other STRING and EMAIL keys for testing
      // [InputTypes.STRING]: GenericTextInput,
      // [InputTypes.EMAIL]: GenericTextInput,
      [InputTypes.STRING]: StringInput,
      [InputTypes.EMAIL]: EmailInput,
      [InputTypes.RADIO]: RadioInput,
      [InputTypes.SELECT]: SelectInput,
      [InputTypes.PHONE]: PhoneInput,
      [InputTypes.MULTISTRING]: MultiStringInput
    }

    /**
     * Updates the input
     * @param {string} inputKey
     * @param {string} inputValue
     */
    updateFormInput (inputKey, inputValue) {
      const newRequestState = { ...this.state.request }
      newRequestState[inputKey] = inputValue
      this.setState({
        request: newRequestState
      })
    }

    /**
     * Compute the initial request object based on props when the component mounts
     */
    componentWillMount () {
      this.createInitialFormRequest(this.props.inputs)
    }

    /**
     * Recompute the initial request object when the form/props changes
     * @param {object} props
     * @param {array} props.inputs
     */
    componentWillReceiveProps (props) {
      this.createInitialFormRequest(props.inputs)
    }

    /**
     * Create the initial request object in case the user doesn't change any input
     * @param {array} inputs
     */
    createInitialFormRequest (inputs) {
      let newInitialRequest = {}

      inputs.forEach((input) => {
        newInitialRequest[input.name] = input.value
      })

      this.setState({ request: newInitialRequest })
    }

    /**
     * Console prints the form request that would be sent to the server
     */
    sendForm () {
      console.log(this.state.request)
    }

    /**
     * Renders the inputs dynamically according to the mapping
     */
    renderInputs () {
      return this.props.inputs.map((input) => {
        const DynamicInputTag = this.components[input.component]

        return <InputContainer key={input.name} label={input.label}>
          <DynamicInputTag {...input} update={this.updateFormInput} />
        </InputContainer>
      })
    }

    render () {
      return (
        <Row>
          <Col xs={12} md={8} xl={6}>
            <Form className='form-renderer p-3 my-3'>
              {this.renderInputs()}
              <hr />
              <div className='d-flex justify-content-around'>
                <Button variant='outline-primary' onClick={this.sendForm}> Send Form </Button>
              </div>
            </Form>
          </Col>
        </Row>

      )
    }
}
FormRenderer.propTypes = {
  inputs: PropTypes.array
}
export default FormRenderer
