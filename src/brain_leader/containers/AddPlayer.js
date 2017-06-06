import React from 'react'
import { 
  Button,
  Col,
  Row,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

let AddPlayer = ({ dispatch }) => {
  let input
  return (
    <Row>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <Button type="submit" bsStyle="success">
          ADD PLAYER
        </Button>
      </form>
    </Row>
  )
}
AddPlayer = connect()(AddPlayer)

export default AddPlayer
