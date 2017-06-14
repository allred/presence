import React from 'react'
import {
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import Player from './Player'

const PlayerList = ({ players, onPlayerClick, onPlusBrainClick, onMinusBrainClick }) => (
  <div>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
        onClick={() => onPlayerClick(player.id)}
        onPlusBrainClick={() => onPlusBrainClick(player.id)}
        onMinusBrainClick={() => onMinusBrainClick(player.id)}
        player={player}
      />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    brainCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onPlayerClick: PropTypes.func.isRequired,
  onPlusBrainClick: PropTypes.func.isRequired,
  onMinusBrainClick: PropTypes.func.isRequired
}

export default PlayerList
