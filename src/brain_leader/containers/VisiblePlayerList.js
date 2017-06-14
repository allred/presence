import { connect } from 'react-redux'
import { togglePlayer, addBrain, minusBrain } from '../actions'
import PlayerList from '../components/PlayerList'

const getVisiblePlayers = (players, filter) => {
  switch (filter) {
    default:
      return players 
  }
}

const mapStateToProps = (state) => {
  return {
    players: getVisiblePlayers(state.players, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerClick: (id) => {
      dispatch(togglePlayer(id))
    },
    onPlusBrainClick: (id) => {
      dispatch(addBrain(id))
    },
    onMinusBrainClick: (id) => {
      dispatch(minusBrain(id))
    }
  }
}

const VisiblePlayerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default VisiblePlayerList
