import React from 'react'
import { connect } from 'react-redux'
import { addBrain } from '../actions'
import {
  Button,
} from 'react-bootstrap'

let PlusBrain = ({ player }) => (
  <Button
    onClick={() => addBrain(player.id)}
  >
    + BRAIN 
  </Button>
)

PlusBrain.propTypes = {
}

PlusBrain = connect()(PlusBrain)

export default PlusBrain
