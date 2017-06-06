import React from 'react'
import {
  ListGroupItem,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

const Player = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListGroupItem>
)

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Player
