import { combineReducers } from 'redux'
import players from './players'
import visibilityFilter from './visibilityFilter'

const brainLeader = combineReducers({
  players,
  visibilityFilter
})

export default brainLeader
