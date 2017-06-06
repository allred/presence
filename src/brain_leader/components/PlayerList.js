import React from 'react'
import {
  Row,
} from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import Player from './Player'

const PlayerList = ({ players, onPlayerClick }) => (
  <div>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
        onClick={() => onPlayerClick(player.id)}
      />
    )}
  </div>
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
