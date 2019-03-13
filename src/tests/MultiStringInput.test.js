import React from 'react'
import { shallow, mount } from 'enzyme'
import MultiStringInput from '../components/MultiStringInput'
import StringInput from '../components/StringInput'
import renderer from 'react-test-renderer'

describe('MultiStringInput', () => {
  const mockupProps = {
    name: 'interests',
    value: ['Running', 'Play the piano', 'Coding']
  }

  it('should render correctly multistring component', () => {
    const MultiStringInputComponent = renderer
      .create(<MultiStringInput name={mockupProps.name} value={mockupProps.value} />)
      .toJSON()
    expect(MultiStringInputComponent).toMatchSnapshot()
  })

  it('should render N string inputs with the proper value', () => {
    const MultiStringInputComponent = mount(<MultiStringInput name={mockupProps.name} value={mockupProps.value} />)
    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(mockupProps.value.length)

    const texts = MultiStringInputComponent.find('input').map(node => node.instance().value)
    expect(texts).toEqual(mockupProps.value)
  })

  it('should update the stringInputs state when the inputs update', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockupProps.name} value={mockupProps.value} update={updateFn} />)

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
    const MultiStringInputComponent = shallow(<MultiStringInput name={mockupProps.name} value={mockupProps.value} update={updateFn} />)
    const MultiStringInputInstance = MultiStringInputComponent.instance()

    MultiStringInputInstance.updateMultiString(mockupProps.name, mockupProps.value)

    expect(updateFn).toHaveBeenCalledWith(mockupProps.name, mockupProps.value)
  })

  it('should delete the last input and update the state', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockupProps.name} value={mockupProps.value} update={updateFn} />)
    const mockUpdatedInputs = mockupProps.value.slice(0, -1)

    MultiStringInputComponent.find('button#delete').simulate('click')

    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(2)
    expect(MultiStringInputComponent.state().stringInputs).toEqual(mockUpdatedInputs)
  })

  it('should add a new empty input and update the state', () => {
    const updateFn = jest.fn()
    const MultiStringInputComponent = mount(<MultiStringInput name={mockupProps.name} value={mockupProps.value} update={updateFn} />)
    const mockUpdatedInputs = [...mockupProps.value, '']

    MultiStringInputComponent.find('button#add').simulate('click')

    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(4)
    expect(MultiStringInputComponent.find('input').at(3).instance().value).toBe('')
    expect(MultiStringInputComponent.state().stringInputs).toEqual(mockUpdatedInputs)
  })
})
