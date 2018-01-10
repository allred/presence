import React from 'react'
import {
  Grid,
  Row,
} from 'react-bootstrap'
import Footer from './Footer'
import AddPlayer from '../containers/AddPlayer'
import ResetScore from '../containers/ResetScore'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './App.css'

const App = () => (
  <Grid
    fluid={true}
  >
    <VisiblePlayerList />
    <p />
    <Row>
      <AddPlayer /> <ResetScore />
    </Row>
    <Footer />
  </Grid>
)

export default App
