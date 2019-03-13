import React from 'react'
import { mount } from 'enzyme'
import StringInput from '../components/StringInput'
import renderer from 'react-test-renderer'

describe('StringInput', () => {
  const mockupProps = {
    name: 'first_name',
    value: 'Paul'
  }
  const inputFn = jest.fn()

  it('should render correctly string component', () => {
    const StringInputComponent = renderer
      .create(<StringInput name={mockupProps.name} value={mockupProps.value} />)
      .toJSON()
    expect(StringInputComponent).toMatchSnapshot()
  })

  it('should render the input with the proper value and name', () => {
    const component = mount(<StringInput name={mockupProps.name} value={mockupProps.value} />)

    expect(
      component.containsMatchingElement(
        <input type='text' value={mockupProps.value} name={mockupProps.name} />
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with proper parameters on input', () => {
    const StringInputComponent = mount(<StringInput name={mockupProps.name} value={mockupProps.value} update={inputFn} />)
    const inputString = 'Aleacontrol'

    StringInputComponent.find('input').simulate('change', {
      target: { value: inputString }
    })

    expect(inputFn).toHaveBeenCalledWith(mockupProps.name, inputString)
  })
})
