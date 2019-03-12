import React from 'react'
import { shallow, mount } from 'enzyme'
import MultiStringInput from '../components/MultiStringInput'
import StringInput from '../components/StringInput'
import renderer from 'react-test-renderer'

describe('MultiStringInput', () => {
  const mockProps = {
    name: 'interests',
    value: ['Running', 'Play the piano', 'Coding']
  }

  it('should render correctly multistring component', () => {
    const MultiStringInputComponent = renderer
      .create(<MultiStringInput name={mockProps.name} value={mockProps.value} />)
      .toJSON()
    expect(MultiStringInputComponent).toMatchSnapshot()
  })

  it('should render N string inputs with the proper value', () => {
    const MultiStringInputComponent = mount(<MultiStringInput name={mockProps.name} value={mockProps.value} />)
    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(mockProps.value.length)

    const texts = MultiStringInputComponent.find('input').map(node => node.instance().value)
    expect(texts).toEqual(mockProps.value)
  })

  it('should update the stringInputs state when the inputs update', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockProps.name} value={mockProps.value} update={updateFn} />)

    MultiStringInputComponent.find('input').map((input, index) => {
      input.simulate('change', {
        target: {
          value: index.toString()
        }
      })
    })

    expect(MultiStringInputComponent.state().stringInputs).toEqual(['0', '1', '2'])
  })

  it('should emit the local state to the parent through the update callback', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = shallow(<MultiStringInput name={mockProps.name} value={mockProps.value} update={updateFn} />)
    const MultiStringInputInstance = MultiStringInputComponent.instance()

    MultiStringInputInstance.updateMultiString(mockProps.name, mockProps.value)

    expect(updateFn).toHaveBeenCalledWith(mockProps.name, mockProps.value)
  })

  it('should delete the last input and update the state', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockProps.name} value={mockProps.value} update={updateFn} />)
    const mockUpdatedInputs = mockProps.value.slice(0, -1)

    MultiStringInputComponent.find('button#delete').simulate('click')

    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(2)
    expect(MultiStringInputComponent.state().stringInputs).toEqual(mockUpdatedInputs)
  })

  it('should clear the inputs and update the state', () => {
    const MultiStringInputComponent = mount(<MultiStringInput name={mockProps.name} value={mockProps.value} />)
    const mockUpdatedInputs = ['', '', '']

    MultiStringInputComponent.find('button#clear').simulate('click')

    const inputValues = MultiStringInputComponent.find('input').map(input => input.instance().value)

    expect(inputValues).toEqual(mockUpdatedInputs)
    expect(MultiStringInputComponent.state().stringInputs).toEqual(mockUpdatedInputs)
  })

  it('should add a new empty input and update the state', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockProps.name} value={mockProps.value} update={updateFn} />)
    const mockUpdatedInputs = [...mockProps.value, '']

    MultiStringInputComponent.find('button#add').simulate('click')

    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(4)
    expect(MultiStringInputComponent.find('input').at(3).instance().value).toBe('')
    expect(MultiStringInputComponent.state().stringInputs).toEqual(mockUpdatedInputs)
  })
})
