import React, {Component} from 'react'
import PropTypes from 'prop-types'

class RadioInput extends Component {
    // Generate the radio button options
    buttons = this.props.options.map((input) => {
        return <div key={input.value}>
            <input type='radio' id={input.value} name={this.props.name} value={input.value}/>
            <label htmlFor={input.value}> {input.description} </label>
        </div>
    })

    render() {
        return (
            <div onChange={(e) => this.props.update(this.props.name, e.target.value)}>
                {this.buttons}
            </div>
        )
    }
}

RadioInput.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string
}
export default RadioInput
