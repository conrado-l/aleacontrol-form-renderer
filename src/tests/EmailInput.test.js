import React from 'react'
import { shallow } from 'enzyme'
import EmailInput from '../components/EmailInput'
import renderer from 'react-test-renderer'

const inputFn = jest.fn()
describe('EmailInput', () => {
  it('should render correctly email component', () => {
    const EmailInputComponent = renderer
      .create(<EmailInput />)
      .toJSON()
    expect(EmailInputComponent).toMatchSnapshot()
  })

  // TODO: make the test for setted values from props, initial value
  it('should call the update callback function on input', () => {
    const EmailInputComponent = shallow(<EmailInput update={inputFn} />)

    EmailInputComponent.find('input').simulate('change', {
      target: { value: 'Aleacontrol' }
    })

    expect(inputFn).toHaveBeenCalled()
  })
})
