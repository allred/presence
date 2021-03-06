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
      <h3>{text}</h3>
    </Col>
    <Col
      xs={4}
    >
      <Button
        bsStyle="warning"
        bsSize="large"
        onClick={onMinusBrainClick}
      >
        - <img src="/brain_leader/brain-50.png" />
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
        + <img src="/brain_leader/brain-50.png" />
      </Button>
    </Col>
    <Col
      xs={2}
    >
      <h3>{player.brainCount}</h3>
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
