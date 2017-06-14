import React from 'react'
import {
  Col,
  Row,
} from 'react-bootstrap'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <Row>
    <Col xsOffset={4} md={4}>
      <center>BRAIN LEADER<p/>(<a style={{color: '#c0c0c0'}} href="http://www.sjgames.com/dice/zombiedice/">Zombie Dice</a> Scorekeeper)</center>
    </Col>
  </Row>
)

export default Footer
