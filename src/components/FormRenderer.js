import React, {Component} from 'react'
import InputContainer from './InputContainer'
import SelectInput from './SelectInput'
import StringInput from './StringInput'
import EmailInput from './EmailInput'
import RadioInput from './RadioInput'
import PhoneInput from './PhoneInput'
import MultiStringInput from './MultiStringInput'
import Button from 'react-bootstrap/Button';
import './FormRenderer.css'

class FormRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: [
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
                }
            ],
            request: {}
        };

        this.sendForm = this.sendForm.bind(this)
        this.updateFormInput = this.updateFormInput.bind(this)
        this.changeSampleData = this.changeSampleData.bind(this)
    }

    sample2 = [
        {
            'label': 'Brand',
            'name': 'brand',
            'value': 'Nike',
            'component': 'string',
            'col': 6
        },
        {
            'label': 'Model',
            'name': 'model',
            'value': 'Total 90',
            'component': 'string',
            'col': 6
        },
        {
            'label': 'Email',
            'name': 'email',
            'value': 'conrado.lk@gmail.com',
            'component': 'email',
            'col': 6
        }
    ]

    // Mapping: JSON component name attributes -> component imports
    components = {
        'string': StringInput,
        'email': EmailInput,
        'radio': RadioInput,
        'select': SelectInput,
        'phone': PhoneInput,
        'multistring': MultiStringInput
    }

    updateFormInput(inputKey, inputValue) {
        const newRequestState = {...this.state.request};
        newRequestState[inputKey] = inputValue;
        this.setState({
                request: newRequestState
            }
        )
    }

    sendForm() {
        console.log(this.state.request)
    }

    changeSampleData() {
        this.setState({
                form: this.sample2
            }
        )
    }

    /**
     * Renders the inputs dynamically according to the mapping
     * @returns {any[]}
     */
    renderInputs() {
        return this.state.form.map((input) => {

            const DynamicInputTag = this.components[input.component]

            return <InputContainer key={input.name} label={input.label}>
                <DynamicInputTag {...input} update={this.updateFormInput}/>
            </InputContainer>
        })
    }

    render() {

        return (
            <form className='form-renderer rounded p-3 my-5 col-md-6 col-sm-6 col-xs-12 col-xl-3'>
                {this.renderInputs()}
                <hr/>
                <div className='d-flex justify-content-around'>
                    <Button variant='outline-info' onClick={this.changeSampleData}> Change Data</Button>
                    <Button variant='outline-primary' onClick={this.sendForm}> Send Form</Button>
                </div>
            </form>
        )
    }
}

export default FormRenderer
