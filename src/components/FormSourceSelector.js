import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/FormSourceSelector.scss'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Button that should change the current form
 */
class FormSourceSelector extends Component {
  render () {
    return (
      <Row>
        <Col xs={12} md={8} xl={6}>
          <div className='form-source-selector w-100 mt-2 d-flex align-content-center justify-content-around'>
            <Button variant='outline-info' className='change-data-button' onClick={this.props.changeFormSample}>
                Change Form Sample</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

FormSourceSelector.propTypes = {
  changeFormSample: PropTypes.func
}
export default FormSourceSelector
