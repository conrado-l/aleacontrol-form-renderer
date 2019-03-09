import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SelectInput extends Component {
    // Generate the select options
    options = this.props.options.map((input) => {
        return <option value={input.value} key={input.value}> {input.description}</option>
    })

    render() {
        return (
            <select onChange={(e) => this.props.update(this.props.name, e.target.value)}>
                {this.options}
            </select>
        )
    }
}

SelectInput.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string
}
export default SelectInput
