import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

/**
 * Simple text type input
 */
class StringInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * Updates the input value and sends the value through the parent callback function
   * @param {object} e Event
   */
  handleChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
    this.props.update(this.props.name, newValue)
  }

  render () {
    return (
      <Row>
        <Col xs={12} sm={this.props.col}>
          <Form.Control
            type='text'
            name={this.props.name}
            value={this.state.value || ''}
            onChange={this.handleChange} />
        </Col>
      </Row>
    )
  }
}

StringInput.propTypes = {
  /** Input's name */
  name: PropTypes.string.isRequired,
  /** Input's value */
  value: PropTypes.string,
  /** Bootstrap's column size */
  col: PropTypes.number,
  /** Callback function when the input changes */
  update: PropTypes.func.isRequired
}

StringInput.defaultProps = {
  value: '',
  col: 6
}

export default StringInput
