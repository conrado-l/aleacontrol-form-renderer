import React from 'react'
import { shallow } from 'enzyme'
import PhoneInput from '../components/PhoneInput'
import SelectInput from '../components/SelectInput'
import StringInput from '../components/StringInput'
import renderer from 'react-test-renderer'

describe('PhoneInput', () => {
  const extOptions = [
    { value: '387', description: 'Bosnia and Herzegovina' },
    { value: '54', description: 'Argentina' }
  ]

  it('should render correctly phone component', () => {
    const SelectInputComponent = renderer
      .create(<SelectInput value={{ phone: '123456', ext: '387' }} options={extOptions} />)
      .toJSON()
    expect(SelectInputComponent).toMatchSnapshot()
  })

  it('should render the ext select', () => {
    const PhoneInputComponent = shallow(<PhoneInput value={{ phone: '123456', ext: '387' }} options={extOptions} />)
    expect(PhoneInputComponent.find(SelectInput)).toHaveLength(1)
  })

  it('should render the phone input', () => {
    const PhoneInputComponent = shallow(<PhoneInput value={{ phone: '123456', ext: '387' }} options={extOptions} />)
    expect(PhoneInputComponent.find(StringInput)).toHaveLength(1)
  })

  it('should update the state when the updatePhone callback is executed', () => {
    const updateFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput value={{ phone: '123456', ext: '387' }} options={extOptions} update={updateFn} />)
    const PhoneInputInstance = PhoneInputComponent.instance()

    PhoneInputInstance.updatePhone('ext', '54')
    PhoneInputInstance.updatePhone('phone', '654321')

    expect(PhoneInputComponent.state().ext).toBe('54')
    expect(PhoneInputComponent.state().phone).toBe('654321')
  })

  it('should emit the local state to the parent through the update callback when the phone/ext is updated', () => {
    const updateFn = jest.fn()
    const PhoneInputComponent = shallow(<PhoneInput value={{ phone: '123456', ext: '387' }} options={extOptions}
      update={updateFn} />)
    const PhoneInputInstance = PhoneInputComponent.instance()

    PhoneInputInstance.updatePhone('ext', '54')
    PhoneInputInstance.updatePhone('phone', '654321')

    expect(updateFn).toHaveBeenCalledTimes(2)

    expect(updateFn.mock.calls[0][0]).toBe('phone')
    expect(updateFn.mock.calls[0][1]).toEqual({ ext: '54', phone: '123456' })
    expect(updateFn.mock.calls[1][0]).toBe('phone')
    expect(updateFn.mock.calls[1][1]).toEqual({ ext: '54', phone: '654321' })
  })
})
