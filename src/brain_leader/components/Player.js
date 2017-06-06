import React from 'react'
import {
  Button,
  Col,
  //ListGroupItem,
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

const Player = ({ onClick, completed, text }) => (
  <Row>
    <Col md={2}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </Col>
    <Col md={2}>
      <Button>
        - BRAIN 
      </Button>
    </Col>
    <Col md={2}>
      <Button>
        + BRAIN 
      </Button>
    </Col>
  </Row>
)

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Player
