import React from 'react'
import { mount } from 'enzyme'
import RadioInput from '../components/RadioInput'
import renderer from 'react-test-renderer'

describe('RadioInput', () => {
  const mockupProps = {
    value: 'male',
    name: 'gender',
    options: [
      { value: 'male', description: 'Male' },
      { value: 'female', description: 'Female' }]
  }

  it('should render correctly radio component', () => {
    const RadioInputComponent = renderer
      .create(<RadioInput name={mockupProps.name} value={mockupProps.value} options={mockupProps.options} />)
      .toJSON()
    expect(RadioInputComponent).toMatchSnapshot()
  })

  it('should render the radio options', () => {
    const RadioInputComponent = mount(<RadioInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.options} />)

    expect(RadioInputComponent.containsMatchingElement(
      <input type='radio' name={mockupProps.options[0].name} value={mockupProps.options[0].value} />)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <label htmlFor={mockupProps.options[0].value}> {mockupProps.options[0].description} </label>)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <input type='radio' name={RadioInputComponent.props().name} id={mockupProps.options[1].value}
        value={mockupProps.options[1].value} />)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <label htmlFor={mockupProps.options[1].value}> {mockupProps.options[1].description} </label>)).toBeTruthy()
  })

  it('should call the update callback function with the proper values on change', () => {
    const changFn = jest.fn()
    const RadioInputComponent = mount(<RadioInput name={mockupProps.name} value={mockupProps.value} options={mockupProps.options}
      update={changFn} />)

    RadioInputComponent.find(`input#${RadioInputComponent.props().options[1].value}`).simulate('change', {
      target: {
        value: RadioInputComponent.props().options[1].value
      }
    })

    expect(changFn).toHaveBeenCalledWith(mockupProps.name, RadioInputComponent.props().options[1].value)
  })
})
