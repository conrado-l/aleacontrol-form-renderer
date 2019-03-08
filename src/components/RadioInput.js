import React, {Component} from 'react'
import PropTypes from 'prop-types'

class RadioInput extends Component {
    // Generate the radio button options
    inputs = this.props.options.map((input) => {
        return <div key={input.value}>
            <input type='radio' id={input.value} name={this.props.name} value={input.value}/>
            <label htmlFor={input.value}> {input.description} </label>
        </div>
    })

    render() {
        return (
            <div>
                {this.inputs}
            </div>
        )
    }
}

RadioInput.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string
}
export default RadioInput
