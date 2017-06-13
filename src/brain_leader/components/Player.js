import React from 'react'
import {
  Button,
  Col,
  //ListGroupItem,
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import PlusBrain from '../components/PlusBrain'

const Player = ({ onClick, completed, text, brainCount }) => (
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
      <PlusBrain />
    </Col>
    <Col md={2}>
      {brainCount} 
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
