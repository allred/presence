import React from 'react'
import { 
  Button,
  Col,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

let AddPlayer = ({ dispatch }) => {
  let input
  return (
    <Row>
    <Col md={12}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value))
        input.value = ''
      }}>
      <FormGroup>
        <input ref={node => {
          input = node
        }} />
        &nbsp;
        <Button type="submit" bsStyle="primary" bsSize="large">
          ADD PLAYER
        </Button>
      </FormGroup>
      </form>
    </Col>
    </Row>
  )
}
AddPlayer = connect()(AddPlayer)

export default AddPlayer
