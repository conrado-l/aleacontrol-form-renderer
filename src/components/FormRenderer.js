import React, {Component} from 'react'
import InputContainer from './InputContainer'
import SelectInput from './SelectInput'
import StringInput from './StringInput'
import EmailInput from './EmailInput'
import RadioInput from './RadioInput'
import PhoneInput from './PhoneInput'

class FormRenderer extends Component {

    components = {
        'string': StringInput,
        'email': EmailInput,
        'radio': RadioInput,
        'select': SelectInput,
        'phone': PhoneInput
    }

    sample = [
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
            'value': null,
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
            'col': 6
        },
        {
            'label': 'Phone number',
            'name': 'phone_number',
            'value': null,
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
            'ext': '+54',
            'phone': '123456'
        }

    ]

    updateFormInput(inputKey, inputValue) {
        this.setState({[inputKey]: inputValue})
    }

    // Render the dynamic inputs
    inputs = this.sample.map((input) => {
        // Create the correct JSX input component tag dynamically
        const DynamicInputTag = this.components[input.component]

        return <InputContainer key={input.name} label={input.label}>
            <DynamicInputTag {...input} update={this.updateFormInput.bind(this)}/> { /* Add every input property as an individual prop*/ }
        </InputContainer>
    })

    render() {
        return (
            <div>
                {this.inputs}
            </div>
        )
    }
}

export default FormRenderer
