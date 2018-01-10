import React from 'react'
import { 
  Button,
  Col,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { resetScore } from '../actions'

let ResetScore = ({ dispatch }) => {
  return (
    <Col md={4}>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(resetScore())
      }}>
      <FormGroup>
        <Button type="submit" bsStyle="primary" bsSize="large">
          RESET SCORE
        </Button>
      </FormGroup>
      </form>
    </Col>
  )
}
ResetScore = connect()(ResetScore)

export default ResetScore 
