import React from 'react'
import { shallow, mount } from 'enzyme'
import SelectInput from '../components/SelectInput'
import renderer from 'react-test-renderer'

describe('SelectInput', () => {
  const mockupProps = {
    name: 'continent',
    value: 'europe',
    options: [
      { value: 'asia', description: 'Asia' },
      { value: 'europe', description: 'Europe' }]
  }

  it('should render correctly select component', () => {
    const inputFn = jest.fn()
    const SelectInputSelectInputComponent = renderer
      .create(<SelectInput name={mockupProps.name} value={mockupProps.value} options={mockupProps.options}
        update={inputFn} />)
      .toJSON()
    expect(SelectInputSelectInputComponent).toMatchSnapshot()
  })

  it('should render the select options', () => {
    const inputFn = jest.fn()
    const SelectInputComponent = shallow(<SelectInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.options} update={inputFn} />)

    expect(
      SelectInputComponent.containsMatchingElement(
        <option value={mockupProps.options[0].value}>{mockupProps.options[0].description}</option>
      )
    ).toBeTruthy()

    expect(
      SelectInputComponent.containsMatchingElement(
        <option value={mockupProps.options[1].value}>{mockupProps.options[1].description}</option>
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with the proper values on change', () => {
    const inputFn = jest.fn()
    const SelectInputComponent = mount(<SelectInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.options} update={inputFn} />)
    SelectInputComponent.find('select').simulate('change', {
      target: {
        value: SelectInputComponent.props().options[0].value
      }
    })

    expect(inputFn).toHaveBeenCalledWith(mockupProps.name, SelectInputComponent.props().options[0].value)
  })
})
