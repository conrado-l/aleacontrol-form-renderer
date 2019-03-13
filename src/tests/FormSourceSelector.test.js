import React from 'react'
import { mount } from 'enzyme'
import FormSourceSelector from '../components/FormSourceSelector'
import Button from 'react-bootstrap/Button'
import renderer from 'react-test-renderer'

describe('FormSourceSelector', () => {
  it('should render correctly form source selector component', () => {
    const clickFn = jest.fn()
    const FormSourceSelectorComponent = renderer
      .create(<FormSourceSelector changeFormSample={clickFn} />)
      .toJSON()
    expect(FormSourceSelectorComponent).toMatchSnapshot()
  })

  it('should render the button', () => {
    const FormSourceSelectorComponent = mount(<FormSourceSelector />)

    expect(FormSourceSelectorComponent.find(Button)).toHaveLength(1)
  })

  it('should call the callback function on click', () => {
    const clickFn = jest.fn()
    const FormSourceSelectorComponent = mount(<FormSourceSelector changeFormSample={clickFn} />)

    FormSourceSelectorComponent.find(Button).simulate('click')

    expect(clickFn).toHaveBeenCalled()
  })
})
