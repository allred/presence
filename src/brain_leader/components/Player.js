import React from 'react'
import {
  Button,
  Col,
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import PlusBrain from '../components/PlusBrain'

const Player = ({ onClick, onPlusBrainClick, onMinusBrainClick, completed, text, brainCount, player }) => (
  <Row>
    <Col md={2}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {player.id} {text}
    </Col>
    <Col md={2}>
      <Button
        onClick={onMinusBrainClick}
      >
        - BRAIN
      </Button>
    </Col>
    <Col md={2}>
      <Button 
        onClick={onPlusBrainClick}
      >
        + BRAIN
      </Button>
    </Col>
    <Col md={2}>
      {player.brainCount}
    </Col>
  </Row>
)

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  brainCount: PropTypes.number.isRequired,
}

export default Player
