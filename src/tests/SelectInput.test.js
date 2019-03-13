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
    const SelectInputComponent = renderer
      .create(<SelectInput name={mockupProps.name} value={mockupProps.value} options={mockupProps.options} />)
      .toJSON()
    expect(SelectInputComponent).toMatchSnapshot()
  })

  it('should render the select options', () => {
    const component = shallow(<SelectInput value={mockupProps.value} options={mockupProps.options} />)

    expect(
      component.containsMatchingElement(
        <option value={mockupProps.options[0].value}>{mockupProps.options[0].description}</option>

      )
    ).toBeTruthy()

    expect(
      component.containsMatchingElement(
        <option value={mockupProps.options[1].value}>{mockupProps.options[1].description}</option>
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with the proper values on change', () => {
    const changFn = jest.fn()
    const component = mount(<SelectInput update={changFn} name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.options} />)
    component.find('select').simulate('change', {
      target: {
        value: component.props().options[0].value
      }
    })

    expect(changFn).toHaveBeenCalledWith(mockupProps.name, component.props().options[0].value)
  })
})
