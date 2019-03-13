import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/**
 * Regular email type input
 */
class EmailInput extends Component {
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
            type='email'
            name={this.props.name}
            value={this.state.value || ''}
            onChange={this.handleChange} />
        </Col>
      </Row>
    )
  }
}

EmailInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  col: PropTypes.number,
  update: PropTypes.func
}

export default EmailInput
