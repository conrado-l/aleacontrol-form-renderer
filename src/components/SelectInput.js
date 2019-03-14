import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

/**
 * Select input with options
 */
class SelectInput extends Component {
  /**
   * Renders the select options
   */
  renderOptions () {
    return this.props.options.map((input) => {
      return <option value={input.value} key={input.value}> {input.description}</option>
    })
  }

  render () {
    return (
      <Row>
        <Col xs={12} sm={this.props.col}>
          <Form.Control as='select' defaultValue={this.props.value}
            onChange={(e) => this.props.update(this.props.name, e.target.value)}>
            {this.renderOptions()}
          </Form.Control>
        </Col>
      </Row>
    )
  }
}

SelectInput.propTypes = {
  /** Input's name */
  name: PropTypes.string.isRequired,
  /** Input's value */
  value: PropTypes.string,
  /** Select options */
  options: PropTypes.array.isRequired,
  /** Bootstrap's column size */
  col: PropTypes.number,
  /** Callback function when the input changes */
  update: PropTypes.func.isRequired
}

SelectInput.defaultProps = {
  value: '',
  col: 6
}

export default SelectInput
