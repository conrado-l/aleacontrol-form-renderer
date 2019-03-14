import React from 'react'
import { mount } from 'enzyme'
import ActionButton from '../components/ActionButton'
import Button from 'react-bootstrap/Button'
import renderer from 'react-test-renderer'

describe('ActionButton', () => {
  it('should render correctly form source selector component', () => {
    const clickFn = jest.fn()
    const ActionButtonComponent = renderer
      .create(<ActionButton clicked={clickFn} />)
      .toJSON()
    expect(ActionButtonComponent).toMatchSnapshot()
  })

  it('should render the button', () => {
    const clickFn = jest.fn()
    const ActionButtonComponent = mount(<ActionButton clicked={clickFn}/>)

    expect(ActionButtonComponent.find(Button)).toHaveLength(1)
  })

  it('should call the callback function on click', () => {
    const clickFn = jest.fn()
    const ActionButtonComponent = mount(<ActionButton clicked={clickFn} />)

    ActionButtonComponent.find(Button).simulate('click')

    expect(clickFn).toHaveBeenCalled()
  })
})
