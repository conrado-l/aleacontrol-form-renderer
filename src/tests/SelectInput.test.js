import React from 'react'
import { shallow, mount } from 'enzyme'
import SelectInput from '../components/SelectInput'
import renderer from 'react-test-renderer'

describe('SelectInput', () => {
  const selectOptions = [
    { value: 'asia', description: 'Asia' },
    { value: 'europe', description: 'Europe' }
  ]

  it('should render correctly select component', () => {
    const SelectInputComponent = renderer
      .create(<SelectInput options={selectOptions} />)
      .toJSON()
    expect(SelectInputComponent).toMatchSnapshot()
  })

  it('should render the select options', () => {
    const component = shallow(<SelectInput options={selectOptions} />)

    expect(
      component.containsMatchingElement(
        <option value='asia'>Asia</option>
      )
    ).toBeTruthy()

    expect(
      component.containsMatchingElement(
        <option value='europe'>Europe</option>
      )
    ).toBeTruthy()
  })

  it('should call the update callback function with the proper values on change', () => {
    const changFn = jest.fn()
    const component = mount(<SelectInput update={changFn} name='select-input' options={selectOptions} />)
    component.find('select').simulate('change', {
      target: {
        value: component.props().options[0].value
      }
    })

    expect(changFn).toHaveBeenCalled()

    expect(changFn.mock.calls[0][0]).toBe('select-input')
    expect(changFn.mock.calls[0][1]).toBe('asia')
  })
})
