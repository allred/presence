import React from 'react'
import { PropTypes } from 'prop-types'
import Player from './Player'

const PlayerList = ({ players, onPlayerClick }) => (
  <ul>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
        onClick={() => onPlayerClick(player.id)}
      />
    )}
  </ul>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onPlayerClick: PropTypes.func.isRequired
}

export default PlayerList
