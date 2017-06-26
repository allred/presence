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
    <Col
      xs={2}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <h4>{text}</h4>
    </Col>
    <Col
      xs={4}
    >
      <Button
        bsStyle="warning"
        bsSize="large"
        onClick={onMinusBrainClick}
      >
        - BRAIN
      </Button>
    </Col>
    <Col
      xs={4}
    >
      <Button 
        bsStyle="success"
        bsSize="large"
        onClick={onPlusBrainClick}
      >
        + BRAIN
      </Button>
    </Col>
    <Col
      xs={2}
    >
      <h4>{player.brainCount}</h4>
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
