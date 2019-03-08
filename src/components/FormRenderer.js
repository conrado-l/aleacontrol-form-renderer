import React, {Component} from 'react'
import DynamicInput from './DynamicInput'
import InputContainer from './InputContainer'

class FormRenderer extends Component {
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
        }
    ]

    // Render the correct input component dynamically
    inputs = this.sample.map((item) => {
        return <InputContainer key={item.name} label={item.label}>
            <DynamicInput
                component={item.component}
                data={item}
                name={item.name}
                label={item.label}
                value={item.value}
                options={item.options ? item.options : null}
                key={item.name}/>
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
