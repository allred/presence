import React from 'react'
import { 
  Button,
  Col,
  FieldGroup,
  FormControl,
  Grid,
  Row,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

let AddPlayer = ({ dispatch }) => {
  let input
  return (
    <div>
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
    </div>
  )
}
AddPlayer = connect()(AddPlayer)

export default AddPlayer
