import React from 'react'
import { mount } from 'enzyme'
import GenericTextInput from '../components/EmailInput'
import renderer from 'react-test-renderer'

describe('GenericTextInput', () => {
  const mockupEmailProps = {
    component: 'email',
    name: 'email',
    value: 'paul@gmail.com'
  }
  const mockupTextProps = {
    component: 'string',
    name: 'first_name',
    value: 'Paul'
  }

  it('should render correctly generic text input component', () => {
    const inputFn = jest.fn()
    const GenericTextInputComponent = renderer
      .create(<GenericTextInput component={mockupEmailProps.component} name={mockupEmailProps.name} value={mockupEmailProps.value}
        update={inputFn} />)
      .toJSON()
    expect(GenericTextInputComponent).toMatchSnapshot()
  })

  it('should render the email input with the proper value and name', () => {
    const inputFn = jest.fn()
    const GenericTextInputComponent = mount(<GenericTextInput component={mockupEmailProps.component} name={mockupEmailProps.name}
      value={mockupEmailProps.value} update={inputFn} />)
    expect(
      GenericTextInputComponent.containsMatchingElement(
        <input type='email' value={mockupEmailProps.value} name={mockupEmailProps.name} />
      )
    ).toBeTruthy()
  })

  it('should render the text input with the proper value and name', () => {
    const inputFn = jest.fn()
    const GenericTextInputComponent = mount(<GenericTextInput component={mockupTextProps.component} name={mockupTextProps.name}
      value={mockupTextProps.value} update={inputFn} />)

    expect(
      GenericTextInputComponent.containsMatchingElement(
        <input name={mockupTextProps.name} value={mockupTextProps.value} />
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with proper parameters on input', () => {
    const inputFn = jest.fn()
    const GenericTextInputComponent = mount(<GenericTextInput name={mockupTextProps.name}
      value={mockupTextProps.value} update={inputFn} />)
    const inputString = 'Aleacontrol'

    GenericTextInputComponent.find('input').simulate('change', {
      target: { value: inputString }
    })

    expect(inputFn).toHaveBeenCalledWith(mockupTextProps.name, inputString)
  })
})
