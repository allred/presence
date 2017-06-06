import React from 'react'
import Footer from './Footer'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import styles from './App.css'
//import 'bootstrap/dist/js/bootstrap'
//import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <div>
    <AddPlayer />
    <VisiblePlayerList />
    <Footer />
  </div>
)

export default App
