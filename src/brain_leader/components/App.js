import React from 'react'
import Footer from './Footer'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './App.css'

const App = () => (
  <div>
    <AddPlayer />
    <VisiblePlayerList />
    <Footer />
  </div>
)

export default App
