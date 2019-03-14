import React from 'react'
import { shallow } from 'enzyme'
import PhoneInput from '../components/PhoneInput'
import SelectInput from '../components/SelectInput'
import StringInput from '../components/StringInput'
import renderer from 'react-test-renderer'

describe('PhoneInput', () => {
  const mockupProps = {
    name: 'phone',
    value: { phone: '123456', ext: '387' },
    extOptions: [
      { value: '387', description: 'Bosnia and Herzegovina' },
      { value: '54', description: 'Argentina' }]
  }

  it('should render correctly phone component', () => {
    const inputFn = jest.fn()
    const SelectInputComponent = renderer
      .create(<PhoneInput name={mockupProps.name} value={mockupProps.value} options={mockupProps.extOptions}
        update={inputFn} />)
      .toJSON()
    expect(SelectInputComponent).toMatchSnapshot()
  })

  it('should render the ext select', () => {
    const inputFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.extOptions} update={inputFn} />)
    expect(PhoneInputComponent.find(SelectInput)).toHaveLength(1)
  })

  it('should render the phone input', () => {
    const inputFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.extOptions} update={inputFn} />)
    expect(PhoneInputComponent.find(StringInput)).toHaveLength(1)
  })

  it('should update the state when the updatePhone callback is executed', () => {
    const inputFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.extOptions} update={inputFn} />)
    const PhoneInputInstance = PhoneInputComponent.instance()

    PhoneInputInstance.updatePhone('ext', '54')
    PhoneInputInstance.updatePhone('phone', '654321')

    expect(PhoneInputComponent.state().ext).toBe('54')
    expect(PhoneInputComponent.state().phone).toBe('654321')
  })

  it('should emit the local state to the parent through the update callback when the phone/ext is updated', () => {
    const inputFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput name={mockupProps.name} value={mockupProps.value}
      options={mockupProps.extOptions}
      update={inputFn} />)
    const PhoneInputInstance = PhoneInputComponent.instance()

    PhoneInputInstance.updatePhone('ext', '54')
    PhoneInputInstance.updatePhone('phone', '654321')

    expect(inputFn).toHaveBeenCalledTimes(2)

    expect(inputFn.mock.calls[0][0]).toBe(mockupProps.name)
    expect(inputFn.mock.calls[0][1]).toEqual({ ext: '54', phone: '123456' })
    expect(inputFn.mock.calls[1][0]).toBe(mockupProps.name)
    expect(inputFn.mock.calls[1][1]).toEqual({ ext: '54', phone: '654321' })
  })
})
