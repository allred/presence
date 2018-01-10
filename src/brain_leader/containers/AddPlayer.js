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
    <Col md={8}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value))
        input.value = "z" + Math.floor(Math.random() * 10)
      }}>
      <FormGroup>
        <input ref={node => {
          input = node
        }}
        defaultValue={"z" + Math.floor(Math.random() * 10)}
        />
        &nbsp;
        <Button type="submit" bsStyle="primary" bsSize="large">
          ADD PLAYER
        </Button>
      </FormGroup>
      </form>
    </Col>
  )
}
AddPlayer = connect()(AddPlayer)

export default AddPlayer
