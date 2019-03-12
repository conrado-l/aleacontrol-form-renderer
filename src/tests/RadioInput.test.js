import React from 'react'
import { mount } from 'enzyme'
import RadioInput from '../components/RadioInput'
import renderer from 'react-test-renderer'

describe('RadioInput', () => {
  const radioOptions = [
    { value: 'male', description: 'Male' },
    { value: 'female', description: 'Female' }
  ]

  it('should render correctly radio component', () => {
    const RadioInputComponent = renderer
      .create(<RadioInput name='gender' value={radioOptions[0].value} options={radioOptions} />)
      .toJSON()
    expect(RadioInputComponent).toMatchSnapshot()
  })

  it('should render the radio options', () => {
    const RadioInputComponent = mount(<RadioInput name='gender' value={radioOptions[0].value}
      options={radioOptions} />)

    expect(RadioInputComponent.containsMatchingElement(
      <input type='radio' name={RadioInputComponent.props().name} id={radioOptions[0].value}
        value={radioOptions[0].value} defaultChecked />)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <label htmlFor={radioOptions[0].value}> {radioOptions[0].description} </label>)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <input type='radio' name={RadioInputComponent.props().name} id={radioOptions[1].value}
        value={radioOptions[1].value} />)).toBeTruthy()

    expect(RadioInputComponent.containsMatchingElement(
      <label htmlFor={radioOptions[1].value}> {radioOptions[1].description} </label>)).toBeTruthy()
  })

  it('should call the update callback function with the proper values on change', () => {
    const changFn = jest.fn()
    const RadioInputComponent = mount(<RadioInput name='gender' value={radioOptions[0].value} options={radioOptions}
      update={changFn} />)

    RadioInputComponent.find(`input#${RadioInputComponent.props().options[1].value}`).simulate('change', {
      target: {
        value: RadioInputComponent.props().options[1].value
      }
    })

    expect(changFn).toHaveBeenCalled()

    expect(changFn).toHaveBeenCalledWith(RadioInputComponent.props().name, RadioInputComponent.props().options[1].value)
  })
})
