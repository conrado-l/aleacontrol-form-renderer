import React from 'react'
import { mount } from 'enzyme'
import EmailInput from '../components/EmailInput'
import renderer from 'react-test-renderer'

describe('EmailInput', () => {
  const mockupProps = {
    name: 'email',
    value: 'paul@gmail.com'
  }

  it('should render correctly email component', () => {
    const inputFn = jest.fn()
    const EmailInputComponent = renderer
      .create(<EmailInput name={mockupProps.name} value={mockupProps.value} update={inputFn} />)
      .toJSON()
    expect(EmailInputComponent).toMatchSnapshot()
  })

  it('should render the input with the proper value and name', () => {
    const inputFn = jest.fn()
    const component = mount(<EmailInput name={mockupProps.name} value={mockupProps.value} update={inputFn} />)

    expect(
      component.containsMatchingElement(
        <input type='email' value={mockupProps.value} name={mockupProps.name} />
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with proper parameters on input', () => {
    const inputFn = jest.fn()
    const EmailInputComponent = mount(<EmailInput name={mockupProps.name} value={mockupProps.value} update={inputFn} />)
    const inputString = 'Aleacontrol'

    EmailInputComponent.find('input').simulate('change', {
      target: { value: inputString }
    })

    expect(inputFn).toHaveBeenCalledWith(mockupProps.name, inputString)
  })
})
