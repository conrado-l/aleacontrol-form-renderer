import React, {Component} from 'react'
import StringInput from './StringInput'
import EmailInput from './EmailInput'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'

class DynamicInput extends Component {

    // Mapping for the "component" prop and the associated dynamic inputs
    components = {
        'string': StringInput,
        'email': EmailInput,
        'radio': RadioInput,
        'select': SelectInput
    };

    render() {
        // Generate the JSX input component tag based on the "component" prop
        const DynamicInputTag = this.components[this.props.component]

        return (
            <DynamicInputTag value={this.props.value} name={this.props.name}
                             options={this.props.options ? this.props.options : null}/>
        )
    }
}

export default DynamicInput
