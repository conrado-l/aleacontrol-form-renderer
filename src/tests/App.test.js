import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import renderer from 'react-test-renderer'
import FormRenderer from '../components/FormRenderer'
import FormSourceSelector from '../components/FormSourceSelector'
import SampleForm1 from '../sample1'
import SampleForm2 from '../sample2'
import { JSONToObject } from '../utils'

describe('App', () => {
  it('should render correctly app component', () => {
    const AppComponent = renderer
      .create(<App />)
      .toJSON()
    expect(AppComponent).toMatchSnapshot()
  })

  it('should render the form renderer component', () => {
    const AppComponent = mount(<App />)
    expect(AppComponent.find(FormRenderer)).toHaveLength(1)
  })

  it('should render the form source selector component', () => {
    const AppComponent = mount(<App />)
    expect(AppComponent.find(FormSourceSelector)).toHaveLength(1)
  })

  it('should have the parsed file sample1.json as initial/mounted state', () => {
    const AppComponent = mount(<App />)
    const parsedSampleForm1 = JSONToObject(SampleForm1)

    expect(AppComponent.state().form).toEqual(parsedSampleForm1)
  })

  it('should have the parsed file sample2.json as state when the changeSampleData executes', () => {
    const AppComponent = mount(<App />)
    const AppComponentInstance = AppComponent.instance()
    const parsedSampleForm2 = JSONToObject(SampleForm2)

    AppComponentInstance.changeFormSample()

    expect(AppComponent.state().form).toEqual(parsedSampleForm2)
  })
})
