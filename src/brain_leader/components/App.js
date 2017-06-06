import React from 'react'
import {
  Grid,
} from 'react-bootstrap'
import Footer from './Footer'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './App.css'

const App = () => (
  <Grid>
    <VisiblePlayerList />
    <AddPlayer />
    <Footer />
  </Grid>
)

export default App
