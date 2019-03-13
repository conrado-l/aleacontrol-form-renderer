import React from 'react'
import { mount } from 'enzyme'
import FormRenderer from '../components/FormRenderer'
import renderer from 'react-test-renderer'
import MultiStringInput from '../components/MultiStringInput'
import StringInput from '../components/StringInput'
import EmailInput from '../components/EmailInput'
import SelectInput from '../components/SelectInput'
import RadioInput from '../components/RadioInput'
import PhoneInput from '../components/PhoneInput'

describe('FormRenderer', () => {
  const mockupInputs =
        [
          {
            'label': 'First name',
            'name': 'first_name',
            'value': null,
            'component': 'string',
            'col': 6
          },
          {
            'label': 'Last name',
            'name': 'last_name',
            'value': null,
            'component': 'string',
            'col': 6
          },
          {
            'label': 'Email',
            'name': 'email',
            'value': null,
            'component': 'email',
            'col': 6
          },
          {
            'label': 'Gender',
            'name': 'gender',
            'value': 'male',
            'options': [
              {
                description: 'Male',
                value: 'male'
              },
              {
                description: 'Female',
                value: 'female'
              }
            ],
            'component': 'radio',
            'col': 6
          },
          {
            'label': 'Continent',
            'name': 'continent',
            'value': null,
            'options': [
              {
                description: 'Europe',
                value: 'europe'
              },
              {
                description: 'America',
                value: 'america'
              },
              {
                description: 'Asia',
                value: 'asia'
              },
              {
                description: 'Africa',
                value: 'africa'
              },
              {
                description: 'Australia',
                value: 'australia'
              },
              {
                description: 'Antartica',
                value: 'antartica'
              }
            ],
            'component': 'select',
            'col': 12
          },
          {
            'label': 'Phone number',
            'name': 'phone_number',
            'value': {
              ext: '+387',
              phone: '123456'
            },
            'component': 'phone',
            options: [
              {
                value: '387',
                description: 'Bosnia and Herzegovina'
              },
              {
                value: '54',
                description: 'Argentina'
              }
            ],
            col: 6
          },
          {
            'label': 'Interests',
            'name': 'interests',
            'value': ['Coding', 'Playing piano', 'Product management'],
            'component': 'multistring',
            'col': 6
          }]

  it('should render correctly form renderer component', () => {
    const FormRendererInputComponent = renderer
      .create(<FormRenderer inputs={mockupInputs} />)
      .toJSON()
    expect(FormRendererInputComponent).toMatchSnapshot()
  })

  it('should render the inputs', () => {
    const MultiStringInputComponent = mount(<FormRenderer inputs={mockupInputs} />)
    expect(MultiStringInputComponent.find(StringInput)).toHaveLength(6) // 1 phone + 2 names + 3 multistring inputs
    expect(MultiStringInputComponent.find(EmailInput)).toHaveLength(1)
    expect(MultiStringInputComponent.find(RadioInput)).toHaveLength(1)
    expect(MultiStringInputComponent.find(SelectInput)).toHaveLength(2) // 1 continent + phone ext
    expect(MultiStringInputComponent.find(PhoneInput)).toHaveLength(1)
    expect(MultiStringInputComponent.find(MultiStringInput)).toHaveLength(1)
  })

  it('should create the initial request object', () => {
    const MultiStringInputComponent = mount(<FormRenderer inputs={mockupInputs} />)
    let initialRequest = {}

    mockupInputs.forEach((input) => {
      initialRequest[input.name] = input.value
    })

    expect(MultiStringInputComponent.state().request).toEqual(initialRequest)
  })
})
