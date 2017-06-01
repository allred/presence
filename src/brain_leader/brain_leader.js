import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import brainLeader from './reducers'

let store = createStore(brainLeader)
