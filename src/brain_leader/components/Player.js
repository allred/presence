import React from 'react'
import {
  Button,
  Col,
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

const Player = ({ onClick, onPlusBrainClick, onMinusBrainClick, completed, text, brainCount, player, bgColor }) => (
  <Row
    style={{
      backgroundColor: bgColor
    }}
  >
    <Col md={2}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </Col>
    <Col md={2}>
      <Button
        bsStyle="warning"
        onClick={onMinusBrainClick}
      >
        - BRAIN
      </Button>
    </Col>
    <Col md={2}>
      <Button 
        bsStyle="success"
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
